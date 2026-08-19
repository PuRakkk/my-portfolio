<script setup lang="ts">
interface Experience {
  id: number
  company: string
  role: string
  period: string
  responsibilities?: string[]
  projects?: {
    name: string
    responsibilities: string[]
  }[]
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Freelancer',
    role: 'Full-Stack Developer',
    period: '2025 - Present',
    projects: [
      {
        name: 'ChatEaver (AI Support & RAG Platform)',
        responsibilities: [
          'Architected a multi-tenant AI customer support SaaS platform using FastAPI, Next.js, and PostgreSQL.',
          'Engineered hierarchical RAG pipelines using LlamaIndex and pgvector for accurate document retrieval.',
          'Built a 3-layer Agentic Intent Orchestrator with multi-LLM fallback across OpenAI, DeepSeek, and Gemini.',
          'Developed real-time bidirectional chat streaming using WebSockets and SSE for website widgets and Telegram bots.',
          'Designed workflows for live human support handoff, quote requests, and appointment/booking automation.',
          'Built secure Server-to-Server (S2S) APIs',
          'Integrated multimodal Voice AI (STT/TTS), Cloudflare R2 object storage, and Lemon Squeezy subscription billing.',
          'Containerized and deployed the full-stack system on Linux using Docker Compose and Caddy with automatic SSL/TLS.',
        ],
      },
      {
        name: 'SportPro (RunBodia Events Platform)',
        responsibilities: [
          'Architected a full-stack running events and marathon ticketing platform using Django REST Framework, PostgreSQL, and Vue.js.',
          'Integrated ACLEDA Bank KHQR payment gateway with idempotency tokens, secure redirections, and automated verification.',
          'Engineered automated 30-minute bib number lock reservations and multi-tiered pricing (Early Bird, Regular, Late).',
          'Implemented digital ticket generation with signed QR codes for race-day check-in and automated email invoice confirmations.',
          'Built dynamic category and race kit package management (T-shirt sizing, timing chips, medals, and meal vouchers).',
          'Developed post-event features including participant ranking leaderboards and high-resolution photo gallery uploads.',
          'Customized an admin dashboard with Django Unfold for live payment tracking, capacity overrides, and operational CSV exports.',
        ],
      },
      {
        name: 'CaInvite',
        responsibilities: [
          'Built CaInvite, a platform for selling wedding invitation templates',
          'Developed custom web applications for clients',
          'Built full-stack solutions with Django, DRF, FastAPI, and Vue.js',
          'Designed and maintained PostgreSQL databases',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'EZZE Technology',
    role: 'Backend Developer',
    period: '2024 - 2025',
    responsibilities: [
      'Worked as a Backend Developer using DRF to integrate with Vue.js',
      'Developed dashboard using Vue.js',
      'Developed Telegram bots with Django and FastAPI',
      'Integrated local payment gateways for QR transactions',
      'Built and deployed Django apps with PostgreSQL',
      'Created RESTful APIs with Django Rest Framework',
      'Deployed high-performance backends using FastAPI',
      'Configured Apache, Gunicorn, and SSL on Linux servers',
      'Designed and built a desktop app with Python',
      'Used Git and GitHub for version control and teamwork',
      'Designed and managed MySQL and PostgreSQL databases',
      'Built and documented APIs with secure authentication',
      'Connected Telegram bots to backends for notifications',
    ],
  },
  {
    id: 3,
    company: 'POSFlow Solutions',
    role: 'QA Technical Support',
    period: '2023 - 2024',
    responsibilities: [
      'Provided technical support for POS (Point of Sale) systems',
      'Configured and maintained thermal printers and POS peripherals',
      'Installed and troubleshooted routers, LAN, and WAN networks',
      'Delivered customer support and resolved technical issues',
      'Performed system testing, troubleshooting, and quality assurance',
      'Troubleshooted desktop computers, OS, hardware, and software',
    ],
  },
]
</script>

<template>
  <section id="experience" class="py-20 lg:py-32 relative overflow-hidden">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">My Journey</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          A timeline of my professional journey and the roles I've held
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600"></div>

        <!-- Experience items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative"
          >
            <!-- Timeline dot -->
            <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-dark-900 z-10"></div>

            <!-- Content card -->
            <div
              :class="[
                'ml-8 md:ml-0 md:w-[calc(50%-2rem)]',
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              ]"
            >
              <div class="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-gold-400/30 transition-all duration-300">
                <!-- Header -->
                <div class="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-white">{{ exp.company }}</h3>
                    <p class="text-gold-400 font-medium">{{ exp.role }}</p>
                  </div>
                  <span class="px-3 py-1 text-sm bg-gold-400/10 text-gold-400 rounded-full border border-gold-400/20">
                    {{ exp.period }}
                  </span>
                </div>

                <!-- Responsibilities -->
                <ul v-if="exp.responsibilities" class="space-y-2">
                  <li
                    v-for="(resp, respIndex) in exp.responsibilities"
                    :key="respIndex"
                    class="flex items-start text-gray-400 text-sm"
                  >
                    <svg class="w-4 h-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    {{ resp }}
                  </li>
                </ul>

                <!-- Project groups -->
                <div v-if="exp.projects" class="space-y-5">
                  <div
                    v-for="project in exp.projects"
                    :key="project.name"
                  >
                    <h4 class="text-sm font-semibold text-white mb-2">
                      Project: {{ project.name }}
                    </h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(resp, respIndex) in project.responsibilities"
                        :key="respIndex"
                        class="flex items-start text-gray-400 text-sm"
                      >
                        <svg class="w-4 h-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        {{ resp }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
