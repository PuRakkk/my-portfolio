import type { Directive } from 'vue'

export interface RevealOptions {
  delay?: number
  threshold?: number
  distance?: number
  scale?: number
}

export const vReveal: Directive<HTMLElement, RevealOptions | number | undefined> = {
  mounted(el, binding) {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible')
      return
    }

    el.classList.add('reveal-init')

    const options: RevealOptions = typeof binding.value === 'number'
      ? { delay: binding.value }
      : binding.value || {}

    if (options.delay) {
      el.style.transitionDelay = `${options.delay}ms`
    }

    if (options.distance !== undefined || options.scale !== undefined) {
      const dist = options.distance ?? 32
      const sc = options.scale ?? 0.95
      el.style.transform = `translateY(${dist}px) scale(${sc})`
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          el.classList.add('reveal-visible')
          obs.unobserve(el)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    observer.observe(el)
    ;(el as any)._revealObserver = observer
  },
  unmounted(el) {
    if ((el as any)._revealObserver) {
      ;(el as any)._revealObserver.disconnect()
    }
  }
}
