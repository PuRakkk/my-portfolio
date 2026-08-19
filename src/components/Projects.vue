<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  liveUrlLabel?: string
  status?: 'active' | 'maintenance'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ChatEaver — AI Customer Support Platform',
    description: 'A multi-tenant AI customer support SaaS platform. It combines LlamaIndex RAG, multi-LLM orchestration (OpenAI, DeepSeek, Gemini), and pgvector for accurate responses. Supports Telegram bots, web chat widgets, voice messages, and human agent handoff.',
    image: 'chateaver',
    tags: ['FastAPI', 'Next.js', 'LlamaIndex', 'pgvector', 'WebSocket', 'Agentic AI'],
    liveUrl: 'https://chateaver.com',
    liveUrlLabel: 'Visit Website',
    status: 'active',
  },
  {
    id: 2,
    title: 'SportPro (RunBodia) — Sports Events & Ticketing Platform',
    description: 'A sports event registration and ticketing platform for running events and marathons in Cambodia. Features category management, dynamic pricing tiers (Early Bird/Regular/Late), automated bib number reservations, digital QR tickets, and secure ACLEDA Bank KHQR payments.',
    image: 'sportpro',
    tags: ['Django', 'DRF', 'Vue.js', 'PostgreSQL', 'KHQR Payment'],
    liveUrl: 'https://runbodia.com',
    liveUrlLabel: 'Visit Website',
    status: 'active',
  },
  {
    id: 3,
    title: 'Telegram RAG Assistant Bot',
    description: 'A personal Telegram assistant bot built on ChatEaver. It answers questions about my background, skills, and projects with context-grounded RAG responses directly inside Telegram.',
    image: 'chon-sarak',
    tags: ['Telegram Bot', 'RAG', 'FastAPI', 'Multi-LLM'],
    liveUrl: 'https://t.me/sarak_assistant_bot',
    liveUrlLabel: 'Telegram Bot',
    status: 'active',
  },
  {
    id: 4,
    title: 'Cainvite Platform',
    description: 'Cainvite is an online platform for selling modern wedding invitation templates. It allows couples to easily browse, customize, and purchase digital wedding designs through a simple and reliable web experience.',
    image: 'cainvite',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Vue.js'],
    status: 'maintenance',
  },
]
</script>

<template>
  <section id="projects" class="py-20 lg:py-32 relative overflow-hidden">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">Projects</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          A selection of projects I've worked on. Each project taught me something new.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="project in projects"
          :key="project.id"
          class="bg-dark-900 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 border border-dark-600 hover:border-gold-400/30"
        >
          <div class="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <!-- Maintenance Status Badge -->
            <span
              v-if="project.status === 'maintenance'"
              class="absolute top-3 right-3 px-2.5 py-1 bg-amber-950/90 border border-amber-500/50 text-amber-300 text-xs font-medium rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-lg z-20"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Under Maintenance
            </span>

            <div
              v-if="project.image === 'cainvite'"
              class="w-full h-full relative overflow-hidden"
            >
              <img
                src="@/assets/images/cainvite_banner.png"
                :alt="project.title"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent"></div>
              <div class="absolute bottom-3 left-4 w-11 h-11 rounded-xl overflow-hidden border border-gold-400/40 bg-dark-900/90 p-1 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="@/assets/images/logo.webp"
                  alt="CaInvite Logo"
                  class="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <div
              v-else-if="project.image === 'chon-sarak'"
              class="w-16 h-16 rounded-full overflow-hidden border border-gold-400/30 bg-dark-900 group-hover:scale-110 transition-transform duration-300"
            >
              <img
                src="@/assets/images/chon-sarak.png"
                :alt="project.title"
                class="w-full h-full object-cover object-[50%_32%] scale-[1.45]"
              />
            </div>
            <div
              v-else-if="project.image === 'chateaver'"
              class="w-full h-full relative overflow-hidden"
            >
              <img
                src="@/assets/images/chateaver_banner.png"
                :alt="project.title"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent"></div>
              <div class="absolute bottom-3 left-4 w-11 h-11 rounded-xl overflow-hidden border border-gold-400/40 bg-dark-900/90 p-1.5 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="@/assets/images/chateaver_logo.png"
                  alt="ChatEaver Logo"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
            <div
              v-else-if="project.image === 'sportpro'"
              class="w-full h-full relative overflow-hidden"
            >
              <img
                src="@/assets/images/sportpro_banner.png"
                :alt="project.title"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent"></div>
              <div class="absolute bottom-3 left-4 w-11 h-11 rounded-xl overflow-hidden border border-gold-400/40 bg-dark-900/90 p-1 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="@/assets/images/sportpro_logo.png"
                  alt="SportPro Logo"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
            <span v-else class="text-7xl group-hover:scale-110 transition-transform duration-300">
              {{ project.image }}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-500 text-sm mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs bg-dark-700 text-gold-400 rounded-full border border-dark-600"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-4">
              <span
                v-if="project.status === 'maintenance'"
                class="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-400/90 rounded-full border border-amber-500/30 text-sm font-medium cursor-not-allowed select-none"
              >
                <svg class="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                Under Maintenance
              </span>
              <a
                v-else-if="project.liveUrl"
                :href="project.liveUrl"
                class="inline-flex items-center px-4 py-2 bg-gold-400/10 hover:bg-gold-400/20 text-gold-400 rounded-full border border-gold-400/30 transition-all duration-300 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg v-if="project.liveUrl.includes('t.me')" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ project.liveUrlLabel || 'Live Demo' }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
