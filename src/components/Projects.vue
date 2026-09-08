<script setup lang="ts">
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
</script>

<template>
  <section id="projects" class="py-20 lg:py-28 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium tracking-wide mb-3">
          <span>// FEATURED WORK</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Production Systems & Projects
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Architected from scratch for resilience, scalability, and seamless user interaction.
        </p>
      </div>

      <!-- Project Cards Grid -->
      <div class="space-y-12">
        <article
          v-for="project in projects"
          :key="project.id"
          v-reveal
          class="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 overflow-hidden backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-300 group"
        >
          <div class="grid lg:grid-cols-12 gap-0 items-stretch">
            
            <!-- Project Image Frame (5 cols) -->
            <div class="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] bg-slate-950 overflow-hidden flex items-center justify-center">
              
              <!-- ChatEaver Banner -->
              <div v-if="project.imageKey === 'chateaver'" class="w-full h-full relative">
                <img
                  src="@/assets/images/chateaver_banner.png"
                  :alt="project.title"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-slate-900/90 border border-white/15 p-2 backdrop-blur-md shadow-xl flex items-center justify-center">
                  <img src="@/assets/images/chateaver_logo.png" alt="ChatEaver Logo" class="w-full h-full object-contain" />
                </div>
              </div>

              <!-- SportPro Banner -->
              <div v-else-if="project.imageKey === 'sportpro'" class="w-full h-full relative">
                <img
                  src="@/assets/images/sportpro_banner.png"
                  :alt="project.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-slate-900/90 border border-white/15 p-2 backdrop-blur-md shadow-xl flex items-center justify-center">
                  <img src="@/assets/images/sportpro_logo.png" alt="SportPro Logo" class="w-full h-full object-contain" />
                </div>
              </div>

              <!-- Telegram Bot with Sarak Avatar -->
              <div v-else-if="project.imageKey === 'chon-sarak'" class="w-full h-full relative flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-950">
                <div class="relative flex flex-col items-center">
                  <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/40 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="@/assets/images/chon-sarak.png"
                      :alt="project.title"
                      class="w-full h-full object-cover object-[50%_32%] scale-[1.45]"
                    />
                  </div>
                  <div class="mt-4 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-sky-400 text-xs font-mono font-medium flex items-center gap-1.5 shadow-xs">
                    <svg class="w-3.5 h-3.5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>@sarak_assistant_bot</span>
                  </div>
                </div>
              </div>

              <!-- CaInvite Banner -->
              <div v-else-if="project.imageKey === 'cainvite'" class="w-full h-full relative">
                <img
                  src="@/assets/images/cainvite_banner.png"
                  :alt="project.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-slate-900/90 border border-white/15 p-2 backdrop-blur-md shadow-xl flex items-center justify-center">
                  <img src="@/assets/images/logo.webp" alt="CaInvite Logo" class="w-full h-full object-contain" />
                </div>
              </div>

              <!-- Status Badge (Top Right) -->
              <div class="absolute top-4 right-4 z-20">
                <span
                  v-if="project.status === 'live'"
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium backdrop-blur-md shadow-md"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Production
                </span>

                <span
                  v-else-if="project.status === 'telegram'"
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium backdrop-blur-md shadow-md"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  Telegram AI
                </span>

                <span
                  v-else-if="project.status === 'maintenance'"
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium backdrop-blur-md shadow-md"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Under Maintenance
                </span>
              </div>
            </div>

            <!-- Project Details (7 cols) -->
            <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-xs font-mono text-amber-400 mt-1 mb-3">
                  {{ project.subtitle }}
                </p>
                <p class="text-sm text-slate-300 leading-relaxed mb-6">
                  {{ project.description }}
                </p>

                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-1.5 mb-6">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Action Row -->
              <div class="pt-4 border-t border-slate-800/80 flex items-center">
                <span
                  v-if="project.status === 'maintenance'"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium cursor-not-allowed select-none"
                >
                  <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Platform Under Maintenance</span>
                </span>

                <a
                  v-else-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-semibold shadow-md shadow-amber-500/15 transition-all active:scale-95"
                >
                  <span>{{ project.liveUrlLabel || 'Visit Platform' }}</span>
                  <svg class="w-3.5 h-3.5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </article>
      </div>

    </div>
  </section>
</template>

