<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cainvite Platform',
    description: 'Cainvite is an online platform for selling modern wedding invitation templates. It allows couples to easily browse, customize, and purchase digital wedding designs through a simple and reliable web experience.',
    image: 'logo',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Vue.js'],
    liveUrl: 'https://cainvite.com',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Telegram RAG Assistant Bot',
    description: 'A Telegram-based LLM portfolio assistant built from my Telegram bot with RAG project. The bot demonstrates retrieval-augmented AI chat, portfolio Q&A, and LLM-powered responses directly inside Telegram.',
    image: 'chon-sarak',
    tags: ['Telegram Bot', 'RAG', 'LLM', 'FastAPI'],
    liveUrl: 'https://t.me/sarak_assistant_bot',
  },
]
</script>

<template>
  <section id="projects" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Dark Red & Gold Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-[400px] h-[400px] bg-red-950/30 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-pulse"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          A selection of projects I've worked on. Each project taught me something new.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in projects"
          :key="project.id"
          class="bg-dark-900 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 border border-dark-600 hover:border-gold-400/30"
        >
          <div class="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div
              v-if="project.image === 'logo'"
              class="w-16 h-16 rounded-full overflow-hidden border border-gold-400/30 bg-dark-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <img
                src="@/assets/images/logo.webp"
                :alt="project.title"
                class="w-10 h-10 object-contain"
              />
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
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                class="flex items-center text-gray-500 hover:text-gold-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                class="flex items-center text-gray-500 hover:text-gold-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
