<script setup lang="ts">
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
    roleNote?: string
    responsibilities: string[]
  }[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Independent / Freelance',
    role: 'Full-Stack Developer & AI Systems Builder',
    period: '2025 — Present',
    location: 'Phnom Penh, Cambodia',
    type: 'Contract / Client Projects',
    projects: [
      {
        name: 'ChatEaver (Enterprise AI Support Platform)',
        roleNote: 'FastAPI • Next.js • LlamaIndex • pgvector • WebSockets',
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
        roleNote: 'Django DRF • PostgreSQL • Vue.js • ACLEDA KHQR',
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
        roleNote: 'Django • DRF • PostgreSQL • Vue.js',
        responsibilities: [
          'Developed CaInvite, an online commerce platform for digital wedding invitation templates.',
          'Designed scalable PostgreSQL schemas and RESTful backend APIs integrated with a responsive Vue.js frontend.'
        ],
      },
    ],
    skills: ['FastAPI', 'Django DRF', 'PostgreSQL', 'LlamaIndex', 'pgvector', 'Vue.js', 'Next.js', 'Docker', 'Caddy', 'KHQR']
  },
  {
    id: 2,
    company: 'EZZE Technology',
    role: 'Backend Developer',
    period: '2024 — 2025',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-Time',
    highlights: [
      'Engineered high-performance RESTful APIs using Django REST Framework and integrated with Vue.js dashboards.',
      'Developed and maintained custom Telegram automation bots using Django and FastAPI.',
      'Integrated local Cambodian payment gateways for instant QR transactions and callback validations.',
      'Configured production Linux web servers (Apache, Gunicorn, SSL certificates, systemd).',
      'Designed, normalized, and optimized relational databases across PostgreSQL and MySQL.',
      'Built a desktop client application in Python for internal administrative operations.',
      'Maintained rigorous Git version control, branch reviews, and API documentation.'
    ],
    skills: ['Python', 'FastAPI', 'Django & DRF', 'PostgreSQL', 'MySQL', 'Linux Administration', 'Telegram Bot API']
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
    skills: ['System QA & Testing', 'Networking (LAN/WAN)', 'Hardware Diagnostics', 'Linux/Windows OS', 'Client Support']
  },
]
</script>

<template>
  <section id="experience" class="py-20 lg:py-28 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium tracking-wide mb-3">
          <span>// CAREER & TIMELINE</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Professional Experience
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          A track record of engineering scalable backends, real-time APIs, and AI-driven platforms.
        </p>
      </div>

      <!-- Experience Timeline Stack -->
      <div class="relative space-y-10 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-amber-500/30 before:to-transparent">
        
        <div
          v-for="(exp, expIdx) in experiences"
          :key="exp.id"
          v-reveal="{ delay: expIdx * 120 }"
          class="relative pl-10 sm:pl-16 group"
        >
          <!-- Timeline Node Icon -->
          <div class="absolute left-2 sm:left-6 -translate-x-1/2 top-7 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300 shadow-sm"></div>

          <!-- Experience Card -->
          <div class="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-300">
            
            <!-- Card Header -->
            <div class="flex flex-wrap items-start justify-between gap-3 mb-6 pb-5 border-b border-slate-800/80">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {{ exp.role }}
                  </h3>
                </div>
                <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
                  <span class="text-amber-400 font-semibold">{{ exp.company }}</span>
                  <span class="text-slate-600">•</span>
                  <span class="text-slate-400">{{ exp.location }}</span>
                  <span class="text-slate-600">•</span>
                  <span class="text-slate-400 font-mono">{{ exp.type }}</span>
                </div>
              </div>

              <!-- Period Pill -->
              <span class="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-400/10 text-amber-300 border border-amber-400/20 shadow-xs">
                {{ exp.period }}
              </span>
            </div>

            <!-- Standalone Highlights -->
            <ul v-if="exp.highlights" class="space-y-2.5 mb-6">
              <li
                v-for="(hl, hlIdx) in exp.highlights"
                :key="hlIdx"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                <svg class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ hl }}</span>
              </li>
            </ul>

            <!-- Nested Projects (Freelance / Systems) -->
            <div v-if="exp.projects" class="space-y-6 mb-6">
              <div
                v-for="proj in exp.projects"
                :key="proj.name"
                class="p-4 sm:p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80"
              >
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {{ proj.name }}
                  </h4>
                  <span v-if="proj.roleNote" class="text-[11px] font-mono text-slate-400">
                    {{ proj.roleNote }}
                  </span>
                </div>

                <ul class="space-y-2">
                  <li
                    v-for="(resp, respIdx) in proj.responsibilities"
                    :key="respIdx"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <svg class="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ resp }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tech Pills Footer -->
            <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
              <span class="text-[11px] font-mono text-slate-400 mr-1.5">Stack:</span>
              <span
                v-for="skill in exp.skills"
                :key="skill"
                class="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-[11px] font-mono text-slate-300"
              >
                {{ skill }}
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
