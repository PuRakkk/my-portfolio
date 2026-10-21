<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import chateaver640 from '@/assets/images/chateaver_banner-640.webp'
import chateaver1200 from '@/assets/images/chateaver_banner-1200.webp'
import sportpro640 from '@/assets/images/sportpro_banner-640.webp'
import sportpro1200 from '@/assets/images/sportpro_banner-1200.webp'
import cainvite640 from '@/assets/images/cainvite_banner-640.webp'
import cainvite1200 from '@/assets/images/cainvite_banner-1200.webp'
import sarakAvatar from '@/assets/images/chon-sarak-360.webp'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  highlights: string[]
  imageKey: 'chateaver' | 'sportpro' | 'chon-sarak' | 'cainvite'
  tags: string[]
  liveUrl?: string
  liveUrlLabel?: string
  status: 'live' | 'telegram' | 'maintenance'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ChatEaver',
    subtitle: 'Enterprise AI Customer Support & Agentic RAG Platform',
    description: 'A multi-tenant AI customer support SaaS engineered to deliver context-accurate automated support across web widgets and Telegram bots.',
    highlights: [
      'Hierarchical RAG pipelines using LlamaIndex and pgvector vector search',
      '3-layer Agentic Intent Orchestrator with multi-LLM fallback across OpenAI, DeepSeek, and Gemini',
      'Bidirectional live chat streaming using WebSockets and Server-Sent Events (SSE)',
      'Multimodal Voice AI (STT/TTS) and automated live human support handoff workflows',
      'Lemon Squeezy subscription billing and Cloudflare R2 media hosting'
    ],
    imageKey: 'chateaver',
    tags: ['FastAPI', 'Next.js', 'LlamaIndex', 'pgvector', 'WebSockets', 'Multi-LLM', 'Docker'],
    liveUrl: 'https://chateaver.com',
    liveUrlLabel: 'Visit Live Platform',
    status: 'live',
  },
  {
    id: 2,
    title: 'SportPro (RunBodia)',
    subtitle: 'Marathon Ticketing & Running Events Platform',
    description: 'A comprehensive running events registration and ticketing platform handling high-volume race check-ins and payment processing in Cambodia.',
    highlights: [
      'ACLEDA Bank KHQR payment gateway integration with idempotency verification',
      'Automated 30-minute race bib number reservation lock system',
      'Digital tickets with cryptographically signed QR codes for race-day check-in',
      'Multi-tiered pricing (Early Bird, Regular, Late) and custom race kit package management',
      'Django Unfold administrative dashboard for live financial and capacity tracking'
    ],
    imageKey: 'sportpro',
    tags: ['Django', 'Django REST Framework', 'Vue.js', 'PostgreSQL', 'KHQR Gateway'],
    liveUrl: 'https://runbodia.com',
    liveUrlLabel: 'Visit Live Platform',
    status: 'live',
  },
  {
    id: 3,
    title: 'Telegram RAG Assistant Bot',
    subtitle: 'Interactive AI Assistant Powered by ChatEaver',
    description: 'A context-grounded personal AI assistant deployed on Telegram, answering technical, career, and project inquiries with sub-second retrieval latency.',
    highlights: [
      'Connected directly to ChatEaver multi-tenant RAG core',
      'Contextual awareness of portfolio projects, engineering background, and experience',
      'Seamless multi-LLM routing for accurate and natural conversational responses',
      'Instant mobile access on Telegram with zero latency overhead'
    ],
    imageKey: 'chon-sarak',
    tags: ['Telegram Bot API', 'FastAPI', 'RAG Retrieval', 'pgvector', 'Multi-LLM'],
    liveUrl: 'https://t.me/sarak_assistant_bot',
    liveUrlLabel: 'Chat on Telegram',
    status: 'telegram',
  },
  {
    id: 4,
    title: 'CaInvite Platform',
    subtitle: 'Digital Wedding Invitation Template Commerce',
    description: 'An online e-commerce platform for browsing, customizing, and purchasing modern digital wedding invitations with automated order fulfillment.',
    highlights: [
      'Interactive design previews and customization workflows for wedding couples',
      'Scalable Django backend with PostgreSQL relational schema',
      'RESTful API architecture integrated with reactive Vue.js client',
      'Clean administrative management for template catalogs and client assets'
    ],
    imageKey: 'cainvite',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Vue.js', 'Tailwind CSS'],
    status: 'maintenance',
  },
]

// Resized WebP banners; the browser picks the smaller one on phones
const banners: Partial<Record<Project['imageKey'], { src: string; srcset: string }>> = {
  chateaver: { src: chateaver1200, srcset: `${chateaver640} 640w, ${chateaver1200} 1200w` },
  sportpro: { src: sportpro1200, srcset: `${sportpro640} 640w, ${sportpro1200} 1200w` },
  cainvite: { src: cainvite1200, srcset: `${cainvite640} 640w, ${cainvite1200} 1200w` },
}
// Card width: ~85vw on phones, ~70vw on small tablets, ~530px on laptop
const bannerSizes = '(min-width: 768px) 530px, (min-width: 640px) 70vw, 85vw'

const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  telegram: 'Live on Telegram',
  maintenance: 'In maintenance',
}

// Carousel: free scrolling with an endless loop, mouse dragging and a slow ticker-style drift.
// The list is rendered three times. We keep the view inside the middle copy: whenever it wanders into an
// outer copy, we jump by exactly one copy's width. All copies are identical, so the jump is invisible.
const DRIFT_PX_PER_SEC = 35
const RESUME_DELAY_MS = 1200
const COPIES = 3
const n = projects.length

const loopItems = Array.from({ length: COPIES }, (_, copy) =>
  projects.map((project, i) => ({ project, realIndex: i, copy, key: `${copy}-${project.id}` }))
).flat()

const track = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const visible = ref<boolean[]>(loopItems.map(() => false))
let firstVisible = n

const cards = () => Array.from(track.value?.children ?? []) as HTMLElement[]
const padLeft = (el: HTMLElement) => parseFloat(getComputedStyle(el).paddingLeft)
const cardLeft = (el: HTMLElement, index: number) => (cards()[index]?.offsetLeft ?? 0) - padLeft(el)
const copyWidth = (el: HTMLElement) => cardLeft(el, n) - cardLeft(el, 0)

// Width of one copy of the list, measured on mount and resize rather than on every frame
let cachedWidth = 0
const measure = () => {
  if (track.value) cachedWidth = copyWidth(track.value)
}

// Drift state. `pos` is a float so slow speeds still move even where scrollLeft rounds to whole pixels.
let pos = 0
let lastSet = 0
let driftFrame = 0
let lastTime = 0
let resumeAt = 0
const pauseReasons = new Set<string>()
const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setScroll = (el: HTMLElement, value: number) => {
  pos = value
  el.scrollLeft = value
  lastSet = el.scrollLeft
}

let stateFrame = 0
const updateState = () => {
  cancelAnimationFrame(stateFrame)
  stateFrame = requestAnimationFrame(() => {
    const el = track.value
    if (!el) return
    const box = el.getBoundingClientRect()

    // A card counts as visible when most of it is inside the track
    const rects = cards().map(card => card.getBoundingClientRect())
    visible.value = rects.map(r => {
      const overlap = Math.min(r.right, box.right) - Math.max(r.left, box.left)
      return overlap / r.width > 0.75
    })
    // The "current" card is the first one with more than half of it showing (works between cards too)
    firstVisible = Math.max(rects.findIndex(r => r.right - box.left > r.width / 2), 0)
    activeIndex.value = firstVisible % n
  })
}

// Keep the view inside the middle copy
const wrap = (el: HTMLElement) => {
  const width = cachedWidth
  if (!width) return
  if (el.scrollLeft < width * 0.5) setScroll(el, el.scrollLeft + width)
  else if (el.scrollLeft >= width * 1.5) setScroll(el, el.scrollLeft - width)
}

// Scrolls we didn't cause (swipe, trackpad, momentum, dot clicks) pause the drift until they go quiet
let settleTimer: ReturnType<typeof setTimeout> | undefined
const onScroll = () => {
  const el = track.value
  if (!el) return
  updateState()
  if (Math.abs(el.scrollLeft - lastSet) <= 1) return
  pos = lastSet = el.scrollLeft
  setPaused('scrolling', true)
  clearTimeout(settleTimer)
  settleTimer = setTimeout(() => {
    if (!pauseReasons.has('pointer')) wrap(el)
    setPaused('scrolling', false)
  }, 150)
}

const tick = (time: number) => {
  const el = track.value
  // Stop the loop entirely while paused (off-screen, hidden tab, hover…); setPaused restarts it
  if (!el || pauseReasons.size > 0) {
    driftFrame = 0
    lastTime = 0
    return
  }
  driftFrame = requestAnimationFrame(tick)
  const dt = lastTime ? Math.min(time - lastTime, 64) : 0
  lastTime = time
  if (performance.now() < resumeAt) return
  pos += (DRIFT_PX_PER_SEC * dt) / 1000
  el.scrollLeft = pos
  lastSet = el.scrollLeft
  if (cachedWidth && pos >= cachedWidth * 1.5) setScroll(el, pos - cachedWidth)
}

const startDrift = () => {
  if (!driftFrame && !reducedMotion) driftFrame = requestAnimationFrame(tick)
}

const setPaused = (reason: string, paused: boolean) => {
  const wasPaused = pauseReasons.size > 0
  if (paused) pauseReasons.add(reason)
  else pauseReasons.delete(reason)
  // Give the visitor a moment before the drift picks up again
  if (wasPaused && pauseReasons.size === 0) {
    resumeAt = performance.now() + RESUME_DELAY_MS
    if (track.value) pos = lastSet = track.value.scrollLeft
    startDrift()
  }
}

const scrollToIndex = (index: number) => {
  const el = track.value
  if (!el) return
  el.scrollTo({ left: cardLeft(el, index), behavior: 'smooth' })
}

const step = (dir: 1 | -1) => scrollToIndex(firstVisible + dir)

// Dots jump to the nearest copy of that project, so the motion stays short
const goTo = (realIndex: number) => {
  const candidates = Array.from({ length: COPIES }, (_, copy) => realIndex + copy * n)
  const nearest = candidates.reduce((a, b) => (Math.abs(b - firstVisible) < Math.abs(a - firstVisible) ? b : a))
  scrollToIndex(nearest)
}

// Taps on phones fire hover/focus events that never "end", so only a real mouse hover
// or keyboard focus pauses the drift
const onHover = (e: PointerEvent, entering: boolean) => {
  if (e.pointerType === 'mouse') setPaused('hover', entering)
}
const onFocusIn = (e: FocusEvent) => {
  if ((e.target as Element).matches(':focus-visible')) setPaused('focus', true)
}

// Mouse drag (touch already scrolls natively)
let drag: { startX: number; startScroll: number; moved: boolean } | null = null
let suppressClick = false

const onPointerDown = (e: PointerEvent) => {
  setPaused('pointer', true)
  if (e.pointerType !== 'mouse' || !track.value) return
  drag = { startX: e.clientX, startScroll: track.value.scrollLeft, moved: false }
}

const onPointerMove = (e: PointerEvent) => {
  if (!drag || !track.value) return
  const dx = e.clientX - drag.startX
  if (Math.abs(dx) > 4) drag.moved = true
  track.value.scrollLeft = drag.startScroll - dx
}

const onPointerUp = () => {
  if (!pauseReasons.has('pointer')) return
  if (drag?.moved) suppressClick = true
  drag = null
  // Free scrolling: stay exactly where the visitor let go. Wrapping happens once scrolling goes quiet
  // (see onScroll); doing it here would fire mid-gesture on touch, where pointercancel arrives as panning starts.
  setPaused('pointer', false)
}

// A drag that ends over a link should not open it
const onClickCapture = (e: MouseEvent) => {
  if (!suppressClick) return
  suppressClick = false
  e.preventDefault()
  e.stopPropagation()
}

const onResize = () => {
  // Card widths change with the viewport; stay on the current project in the middle copy
  const el = track.value
  if (!el) return
  measure()
  setScroll(el, cardLeft(el, n + (firstVisible % n)))
  updateState()
}

let observer: IntersectionObserver | undefined
const onVisibility = () => setPaused('hidden', document.hidden)

onMounted(() => {
  const el = track.value
  if (!el) return
  // Start on the first project of the middle copy, so there is room to scroll either way
  measure()
  setScroll(el, cardLeft(el, n))
  updateState()
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
  document.addEventListener('visibilitychange', onVisibility)
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => setPaused('offscreen', !entry?.isIntersecting), { threshold: 0.4 })
    observer.observe(el)
  }
  startDrift()
})

onUnmounted(() => {
  cancelAnimationFrame(stateFrame)
  cancelAnimationFrame(driftFrame)
  clearTimeout(settleTimer)
  observer?.disconnect()
  window.removeEventListener('resize', onResize)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <section id="projects" class="py-20 sm:py-28 border-t border-line">
    <div class="container-page">
      <SectionHeading index="04" label="Projects" />

      <!-- Track: bleeds to the screen edge on phones so the next card peeks in -->
      <div
        ref="track"
        v-reveal
        class="no-scrollbar relative -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 scroll-px-4 sm:scroll-px-6 md:scroll-px-0 flex gap-4 md:gap-6 overflow-x-auto md:cursor-grab md:active:cursor-grabbing select-none overscroll-x-contain focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-lg"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        @scroll.passive="onScroll"
        @keydown.right.prevent="step(1)"
        @keydown.left.prevent="step(-1)"
        @pointerenter="onHover($event, true)"
        @pointerleave="onHover($event, false)"
        @focusin="onFocusIn"
        @focusout="setPaused('focus', false)"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @click.capture="onClickCapture"
        @dragstart.prevent
      >
        <article
          v-for="({ project, realIndex, copy, key }, loopIdx) in loopItems"
          :key="key"
          class="group shrink-0 basis-[85%] sm:basis-[70%] md:basis-[46%] flex flex-col transition-opacity duration-300"
          :class="visible[loopIdx] ? 'opacity-100' : 'opacity-50'"
          :aria-hidden="copy !== 1 || undefined"
          :aria-label="`${realIndex + 1} of ${projects.length}: ${project.title}`"
        >
          <!-- Image -->
          <component
            :is="project.liveUrl ? 'a' : 'div'"
            :href="project.liveUrl"
            :target="project.liveUrl ? '_blank' : undefined"
            :rel="project.liveUrl ? 'noopener noreferrer' : undefined"
            :tabindex="project.liveUrl ? -1 : undefined"
            class="block aspect-[16/10] rounded-lg overflow-hidden border border-line bg-surface"
          >
            <img
              v-if="banners[project.imageKey]"
              :src="banners[project.imageKey]!.src"
              :srcset="banners[project.imageKey]!.srcset"
              :sizes="bannerSizes"
              :alt="`${project.title} screenshot`"
              decoding="async"
              class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
              draggable="false"
            />
            <!-- Telegram bot: avatar + handle -->
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-4">
              <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-line">
                <img :src="sarakAvatar" :alt="project.title" class="w-full h-full object-cover object-[50%_32%] scale-[1.45]" loading="lazy" decoding="async" draggable="false" />
              </div>
              <span class="font-mono text-xs sm:text-sm text-muted">@sarak_assistant_bot</span>
            </div>
          </component>

          <!-- Details -->
          <div class="flex flex-col flex-1 pt-5">
            <div class="flex items-center gap-3 text-xs font-mono text-subtle">
              <span>{{ String(realIndex + 1).padStart(2, '0') }}</span>
              <span class="w-6 h-px bg-line"></span>
              <span class="inline-flex items-center gap-1.5">
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="project.status === 'maintenance' ? 'bg-amber-500' : 'bg-emerald-500'"
                ></span>
                {{ statusLabel[project.status] }}
              </span>
            </div>

            <h3 class="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-fg">{{ project.title }}</h3>
            <p class="mt-1 text-sm text-muted">{{ project.subtitle }}</p>

            <p class="mt-4 font-mono text-xs text-subtle leading-relaxed">
              {{ project.tags.join(' · ') }}
            </p>

            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              :tabindex="copy !== 1 ? -1 : undefined"
              class="mt-auto pt-5 self-start inline-flex items-center gap-1.5 text-sm font-medium text-fg link-underline"
            >
              {{ project.liveUrlLabel || 'Visit platform' }}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Position: dots everywhere, counter from tablet up -->
      <div class="mt-8 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button
            v-for="(project, i) in projects"
            :key="project.id"
            type="button"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeIndex === i ? 'w-6 bg-fg' : 'w-1.5 bg-line hover:bg-subtle'"
            :aria-label="`Go to ${project.title}`"
            :aria-current="activeIndex === i"
            @click="goTo(i)"
          ></button>
        </div>

        <span class="hidden md:inline font-mono text-xs text-subtle">
          <span class="text-fg">{{ String(activeIndex + 1).padStart(2, '0') }}</span>
          / {{ String(projects.length).padStart(2, '0') }}
        </span>
      </div>
    </div>
  </section>
</template>
