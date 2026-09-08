import type { Directive } from 'vue'

export interface RevealOptions {
  delay?: number
  threshold?: number
  distance?: number
  scale?: number
}

// Global registry mapping DOM elements to their reveal configurations
const optionsMap = new WeakMap<HTMLElement, RevealOptions>()

// Singleton observer instance to handle all elements in a single native C++ pass
let sharedObserver: IntersectionObserver | null = null

function getOrCreateObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  if (!sharedObserver) {
    const isMobile = window.innerWidth < 768
    const rootMargin = isMobile ? '0px 0px -15px 0px' : '0px 0px -25px 0px'

    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            revealElement(el, entry)
            sharedObserver?.unobserve(el)
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin
      }
    )
  }

  return sharedObserver
}

function revealElement(el: HTMLElement, entry?: IntersectionObserverEntry) {
  const options = optionsMap.get(el) || {}
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // If user scrolled fast and element is already deep into view, suppress artificial delay
  const isDeepInView = entry && entry.boundingClientRect.top < window.innerHeight * 0.4
  const delay = isDeepInView
    ? 0
    : isMobile
      ? Math.min((options.delay ?? 0) * 0.25, 45)
      : (options.delay ?? 0)

  if (delay > 0) {
    el.style.transitionDelay = `${delay}ms`
  }

  // Trigger CSS transition
  el.classList.add('reveal-visible')

  // Release GPU compositor memory immediately when transition completes
  const cleanupGpu = () => {
    el.style.willChange = 'auto'
    el.removeEventListener('transitionend', cleanupGpu)
  }
  el.addEventListener('transitionend', cleanupGpu, { once: true })

  // Fallback safety cleanup timer in case transitionend does not fire
  setTimeout(cleanupGpu, (delay || 0) + (isMobile ? 500 : 700))
}

export const vReveal: Directive<HTMLElement, RevealOptions | number | undefined> = {
  mounted(el, binding) {
    // Accessibility check: Prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible')
      return
    }

    const options: RevealOptions = typeof binding.value === 'number'
      ? { delay: binding.value }
      : binding.value || {}

    optionsMap.set(el, options)
    el.classList.add('reveal-init')

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    // Custom distance or scale override
    if (options.distance !== undefined || options.scale !== undefined) {
      const dist = options.distance ?? (isMobile ? 28 : 42)
      const sc = options.scale ?? (isMobile ? 0.96 : 0.95)
      el.style.transform = `translate3d(0, ${dist}px, 0) scale(${sc})`
    }

    const observer = getOrCreateObserver()
    if (!observer) {
      el.classList.add('reveal-visible')
      return
    }

    // Above-the-fold instant reveal: elements already on screen upon mount pop up immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < (window.innerHeight || 800) - 30 && rect.bottom > 0) {
      requestAnimationFrame(() => {
        revealElement(el)
      })
      return
    }

    observer.observe(el)
  },
  unmounted(el) {
    optionsMap.delete(el)
    sharedObserver?.unobserve(el)
  }
}
