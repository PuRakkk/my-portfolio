<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'

interface ExperienceItem {
  id: number
  company: string
  role: string
  period: string
  location: string
  type: string
  highlights?: string[]
  projects?: {
    name: string
    short: string
    responsibilities: string[]
  }[]
}

const experiences: ExperienceItem[] = [
  {
    id: 4,
    company: 'Twenty Twenty',
    role: 'AI Automation Engineer',
    period: '2026 — Present',
    location: 'Remote · Australia',
    type: 'Full-Time',
    projects: [
      {
        name: 'Presentation Automation',
        short: 'Presentation Automation',
        responsibilities: [
          'Built a pipeline that turns course slides and scripts into narrated videos.',
          'Matched each part of the script to the right slide automatically.',
          'Built a 3-layer AI agent system to improve, plan, and produce each video.',
          'Connected Claude, Gemini, and OpenAI with automatic fallback if one fails.',
          'Created natural voiceovers with ElevenLabs.',
          'Rendered 1080p videos with FFmpeg, adding subtitles and background music.',
          'Added an audio-only podcast version with chapters for listening on the go.',
          'Built a web studio with FastAPI and live progress updates.'
        ],
      },
      {
        name: 'RPL Automation (Recognition of Prior Learning)',
        short: 'RPL Automation',
        responsibilities: [
          'Built a Slack bot that creates RPL assessment documents from a course code.',
          'Collected course details automatically from training.gov.au.',
          'Integrated the Claude API to write the assessment content for each course unit.',
          'Added an AI review step that finds problems and sends them back to fix.',
          'Generated three ready-to-use Word documents for each unit.',
          'Built it with FastAPI and saved every AI step for easy checking.'
        ],
      },
      {
        name: 'AI-News Automation',
        short: 'AI-News Automation',
        responsibilities: [
          'Built a daily pipeline that finds AI news and turns it into short videos.',
          'Checked each story against a second source to confirm it is true.',
          'Scored stories by how useful they are for business owners.',
          'Used LLMs to write scripts and fact-check every claim against the source.',
          'Created AI presenter videos with HeyGen and natural voiceovers with ElevenLabs.',
          'Added one-click approval in Slack before any video goes live.',
          'Auto-posted approved videos to Instagram Reels and YouTube Shorts.',
          'Scheduled daily jobs with Redis and ARQ.'
        ],
      },
      {
        name: 'Content Migration Automation',
        short: 'Content Migration',
        responsibilities: [
          'Built automated scrapers with Playwright to collect content from old websites.',
          'Cleaned up messy HTML so the content is clean and ready for the new website.',
          'Organized and improved the content, then mapped it into structured JSON fields for the new website.',
          'Used LLMs to rewrite, improve, and check content automatically, which made the migration faster and more reliable.'
        ],
      },
    ],
  },
  {
    id: 1,
    company: 'Independent / Freelance',
    role: 'Full-Stack Developer & AI Systems Builder',
    period: '2025 — 2026',
    location: 'Phnom Penh, Cambodia',
    type: 'Contract / Client Projects',
    projects: [
      {
        name: 'Chessman Topup (Game Top-Up Store)',
        short: 'Chessman Topup',
        responsibilities: [
          'Built an online store where players in Cambodia buy in-game credits.',
          'Integrated secure KHQR payments with ABA PayWay, so customers scan a QR code to pay and get their top-up delivered automatically.',
          'Made orders safe: no double charges, no double deliveries, and clear refund handling when something goes wrong.',
          'Built a price sync that keeps game prices up to date and always protects a minimum profit.',
          'Added Telegram alerts and an admin panel so the owner can watch orders and fix problems quickly.',
          'Built the backend with FastAPI and PostgreSQL and the frontend with Next.js, and deployed both with Docker behind Cloudflare.'
        ],
      },
      {
        name: 'ChatEaver (Enterprise AI Support Platform)',
        short: 'ChatEaver',
        responsibilities: [
          'Architected a multi-tenant AI customer support SaaS platform handling automated knowledge base ingestion.',
          'Engineered hierarchical RAG pipelines using LlamaIndex and pgvector for semantic document retrieval.',
          'Built a 3-layer Agentic Intent Orchestrator with dynamic multi-LLM fallback across OpenAI, DeepSeek, and Gemini.',
          'Developed low-latency bidirectional chat streaming using WebSockets and SSE for embeddable web widgets and Telegram bots.',
          'Designed workflows for live human support handoff, appointment scheduling, and Server-to-Server (S2S) APIs.',
          'Integrated multimodal Voice AI with Speech-to-Text (STT) and Text-to-Speech (TTS) for conversational voice interactions.',
          'Implemented Lemon Squeezy subscription billing with automated webhook handling and tiered access management.',
          'Containerized the full stack with Docker Compose and configured Caddy with automated SSL/TLS encryption on Linux.'
        ],
      },
      {
        name: 'SportPro (RunBodia Events Platform)',
        short: 'SportPro',
        responsibilities: [
          'Architected a full-stack running events and marathon ticketing platform with high-concurrency race registrations.',
          'Integrated ACLEDA Bank KHQR payment gateway with idempotency tokens, secure redirects, and automated verification.',
          'Engineered automated 30-minute bib number lock reservations and multi-tiered pricing (Early Bird, Regular, Late).',
          'Implemented digital ticket generation with signed QR codes for race-day check-in and automated email confirmations.',
          'Customized administrative operations with Django Unfold for live payment audits and capacity overrides.'
        ],
      },
      {
        name: 'CaInvite Platform',
        short: 'CaInvite',
        responsibilities: [
          'Developed CaInvite, an online commerce platform for digital wedding invitation templates.',
          'Designed scalable PostgreSQL schemas and RESTful backend APIs integrated with a responsive Vue.js frontend.'
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'EZZE Technology',
    role: 'Backend Developer',
    period: '2024 — 2025',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-Time',
    projects: [
      {
        name: 'MiniPOS (Telegram Point of Sale)',
        short: 'MiniPOS',
        responsibilities: [
          'Architected a multi-tenant POS backend (Group Company → Company → Branch) with Django REST Framework and PostgreSQL.',
          'Enforced row-level data isolation with a custom filter backend scoping data to each user\'s company or branches.',
          'Built dynamic role-based access control mapping HTTP methods to Django model permissions.',
          'Implemented JWT auth with HttpOnly cookies, token rotation, Telegram PIN login, and brute-force lockouts.',
          'Designed a user approval workflow that delivers auto-generated credentials through Telegram.',
          'Built per-company Telegram bots with webhooks auto-updated via Django signals and English / Khmer replies.',
          'Built transaction APIs with a full status lifecycle, USD / KHR support, and payment status callbacks.',
          'Integrated ABA PayWay for KHQR transactions with HMAC-SHA512 signed requests and encrypted merchant credentials.',
          'Delivered daily sales reports by branch and currency through the API and Telegram bot.',
          'Built inventory for each branch and linked products to every sale.',
          'Built customer and membership modules with Telegram channel tracking'
        ],
      },
      {
        name: 'Decoder (AI Document & Code Scanner Bot)',
        short: 'Decoder',
        responsibilities: [
          'Built a three-part system: a FastAPI Telegram bot, a Django REST decoding API, and a Vue.js scanner Mini App.',
          'Designed a configurable step engine that guides each scan through image, text, and location steps with fallbacks.',
          'Decoded QR codes and barcodes with pyzbar and OpenCV preprocessing.',
          'Extracted passport and ID card MRZ data, converting birth and expiry dates into clean fields.',
          'Read Cambodian GDT VAT TINs from invoices using Google Cloud Vision OCR and Gemini parsing.',
          'Extracted device IMEIs from labels with Tesseract OCR, regex matching, and barcode fallback.',
          'Parsed ZTO shipping labels for tracking barcodes and recipient phone numbers.',
          'Used Gemini 2.0 Flash with task-specific prompts to turn raw OCR text into structured JSON.',
          'Secured bot webhooks and internal APIs with secret GUIDs, and linked each scan to a user, image, and GPS location.',
          'Added English / Khmer bot replies, menu commands, contact sharing, and a camera QR scanner'
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'POSFlow Solutions',
    role: 'QA & Technical Support Specialist',
    period: '2023 — 2024',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-Time',
    highlights: [
      'Provided tier-1 and tier-2 technical diagnostics and quality assurance for enterprise POS systems.',
      'Configured, deployed, and serviced network infrastructure including routers, switches, LAN/WAN, and thermal printer peripherals.',
      'Conducted methodical system testing, bug reproduction, and regression verification on client retail software.',
      'Delivered rapid customer problem resolution and hardware troubleshooting under tight uptime SLAs.'
    ],
  },
]

// Accordion: the most recent role starts open; every point stays in the page, just tucked away
const openIds = ref(new Set<number>([experiences[0]!.id]))
const toggle = (id: number) => {
  const next = new Set(openIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openIds.value = next
}

// Project tabs inside a role (index of the selected project, per role)
const activeProject = ref<Record<number, number>>({})
// Projects the visitor has opened, so unseen ones can show a small "there's more" dot
const visited = ref<Record<number, Set<number>>>({})

const current = (exp: ExperienceItem) => activeProject.value[exp.id] ?? 0
const isUnseen = (exp: ExperienceItem, pIdx: number) => pIdx !== 0 && !visited.value[exp.id]?.has(pIdx)

const selectProject = (exp: ExperienceItem, pIdx: number) => {
  activeProject.value[exp.id] = pIdx
  visited.value[exp.id] = new Set([...(visited.value[exp.id] ?? []), pIdx])
}

// "Next project" loops back to the first after the last
const nextProject = (exp: ExperienceItem) => {
  const count = exp.projects?.length ?? 0
  if (count) selectProject(exp, (current(exp) + 1) % count)
}

const pad = (value: number) => String(value).padStart(2, '0')

// Tab rows that scroll sideways (phones): show a fade + arrow while more tabs are hidden to the right
const tabRows = new Map<number, HTMLElement>()
const moreTabs = ref<Record<number, boolean>>({})
const checkTabs = (id: number) => {
  const el = tabRows.get(id)
  if (el) moreTabs.value[id] = el.scrollLeft + el.clientWidth < el.scrollWidth - 2
}
const setTabRow = (id: number, el: unknown) => {
  if (el instanceof HTMLElement) tabRows.set(id, el)
  else tabRows.delete(id)
}
const scrollTabs = (id: number) => {
  const el = tabRows.get(id)
  el?.scrollBy({ left: el.clientWidth * 0.7, behavior: 'smooth' })
}
const checkAllTabs = () => tabRows.forEach((_, id) => checkTabs(id))

onMounted(() => {
  checkAllTabs()
  // Fonts swap in after first paint and change tab widths
  document.fonts?.ready.then(checkAllTabs)
  window.addEventListener('resize', checkAllTabs, { passive: true })
})
onUnmounted(() => window.removeEventListener('resize', checkAllTabs))
</script>

<template>
  <section id="experience" class="py-14 sm:py-20 border-t border-line">
    <div class="container-page">
      <SectionHeading
        index="03"
        label="Experience"
      />

      <ol class="border-t border-line">
        <li v-for="exp in experiences" :key="exp.id" v-reveal class="border-b border-line">
          <!-- Row header: always visible, toggles the details -->
          <button
            type="button"
            class="group w-full grid md:grid-cols-12 gap-1 md:gap-8 py-6 sm:py-8 text-left"
            :aria-expanded="openIds.has(exp.id)"
            :aria-controls="`exp-panel-${exp.id}`"
            @click="toggle(exp.id)"
          >
            <div class="md:col-span-3 text-sm">
              <p class="font-mono text-xs sm:text-sm text-fg">{{ exp.period }}</p>
              <p class="hidden md:block mt-1 text-muted">{{ exp.type }}</p>
              <p class="hidden md:block text-subtle">{{ exp.location }}</p>
            </div>

            <div class="md:col-span-9 flex items-start justify-between gap-4 mt-2 md:mt-0">
              <div>
                <h3 class="text-lg sm:text-xl font-semibold tracking-tight text-fg">{{ exp.role }}</h3>
                <p class="mt-1 text-sm sm:text-base text-muted">{{ exp.company }}</p>
                <!-- Shown once the row is open, as a hint that there are several projects to browse -->
                <span
                  v-if="exp.projects && exp.projects.length > 1 && openIds.has(exp.id)"
                  class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs font-medium text-accent"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
                  </svg>
                  {{ exp.projects.length }} projects inside
                </span>
              </div>

              <!-- Dropdown chevron: flips up when open -->
              <span
                class="shrink-0 mt-1 w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted transition-all duration-300 group-hover:border-fg group-hover:text-fg"
                :class="{ 'rotate-180 !border-fg !text-fg': openIds.has(exp.id) }"
                aria-hidden="true"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </button>

          <!-- Details: grid-rows 0fr → 1fr animates to the content's natural height -->
          <div
            :id="`exp-panel-${exp.id}`"
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="openIds.has(exp.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            :inert="!openIds.has(exp.id)"
          >
            <div class="overflow-hidden">
              <div class="md:grid md:grid-cols-12 md:gap-8 pb-8 sm:pb-10">
                <div class="md:col-span-9 md:col-start-4 max-w-3xl">
                  <ul v-if="exp.highlights" class="space-y-2">
                    <li v-for="item in exp.highlights" :key="item" class="dash-item">
                      {{ item }}
                    </li>
                  </ul>

                  <!-- Project tabs: one project's points at a time -->
                  <div v-if="exp.projects?.length">
                    <div class="flex items-end justify-between gap-4 border-b border-line">
                      <div class="relative -mb-px min-w-0">
                      <!-- Scrolls sideways when the tabs don't fit; overlaps the divider so the active underline sits on it -->
                      <div
                        :ref="el => setTabRow(exp.id, el)"
                        class="no-scrollbar flex gap-4 sm:gap-6 overflow-x-auto pt-1 pr-2"
                        role="tablist"
                        @scroll.passive="checkTabs(exp.id)"
                      >
                        <button
                          v-for="(project, pIdx) in exp.projects"
                          :key="project.name"
                          type="button"
                          role="tab"
                          :aria-selected="current(exp) === pIdx"
                          class="relative shrink-0 pb-2.5 inline-flex items-baseline gap-1.5 text-sm whitespace-nowrap border-b transition-colors"
                          :class="current(exp) === pIdx ? 'text-fg border-fg' : 'text-muted border-transparent hover:text-fg'"
                          @click="selectProject(exp, pIdx)"
                        >
                          <span class="font-mono text-[10px] text-subtle">{{ pad(pIdx + 1) }}</span>
                          {{ project.short }}
                          <!-- Unseen project: small pulsing dot -->
                          <span v-if="isUnseen(exp, pIdx)" class="absolute -top-0.5 -right-2 flex w-1.5 h-1.5" aria-hidden="true">
                            <span class="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping"></span>
                            <span class="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent"></span>
                          </span>
                        </button>
                      </div>
                        <!-- More tabs to the right: fade + arrow, tap to scroll -->
                        <button
                          v-if="moreTabs[exp.id]"
                          type="button"
                          tabindex="-1"
                          aria-hidden="true"
                          class="absolute inset-y-0 right-0 w-12 flex items-center justify-end bg-gradient-to-l from-bg via-bg/90 to-transparent text-muted hover:text-fg"
                          @click="scrollTabs(exp.id)"
                        >
                          <svg class="tabs-hint w-4 h-4 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                      <span class="hidden sm:inline pb-2.5 font-mono text-xs text-subtle">
                        <span class="text-fg">{{ current(exp) + 1 }}</span> / {{ exp.projects.length }}
                      </span>
                    </div>

                    <template v-for="(project, pIdx) in exp.projects" :key="project.name">
                      <div v-if="current(exp) === pIdx" class="tab-panel pt-5" role="tabpanel">
                        <h4 class="text-sm font-medium text-fg">{{ project.name }}</h4>
                        <ul class="mt-3 space-y-2">
                          <li v-for="item in project.responsibilities" :key="item" class="dash-item">
                            {{ item }}
                          </li>
                        </ul>

                        <!-- Next project: makes it obvious there is more to see -->
                        <div v-if="exp.projects.length > 1" class="mt-6 pt-4 border-t border-line flex items-center justify-between gap-4">
                          <span class="font-mono text-xs text-subtle">Project {{ pIdx + 1 }} of {{ exp.projects.length }}</span>
                          <button
                            type="button"
                            class="group/next inline-flex items-center gap-1.5 text-sm font-medium text-fg"
                            @click="nextProject(exp)"
                          >
                            <span class="text-muted">{{ pIdx + 1 === exp.projects.length ? 'Back to' : 'Next:' }}</span>
                            {{ exp.projects[(pIdx + 1) % exp.projects.length]!.short }}
                            <svg class="w-4 h-4 transition-transform group-hover/next:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6l6 6-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* Quick fade when switching project tabs */
.tab-panel {
  animation: tab-in 200ms ease-out;
}

@keyframes tab-in {
  from { opacity: 0; transform: translateY(4px); }
}

/* Gentle nudge on the "more tabs" arrow */
.tabs-hint {
  animation: nudge 1.6s ease-in-out infinite;
}

@keyframes nudge {
  50% { transform: translateX(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .tab-panel,
  .tabs-hint {
    animation: none;
  }
}
</style>
