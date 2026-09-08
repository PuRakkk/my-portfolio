<script setup lang="ts">
import { ref, computed } from 'vue'

interface TechItem {
  name: string
  tag: string
  image?: string
  icon?: string
}

interface DomainGroup {
  id: 'backend' | 'ai' | 'frontend' | 'devops'
  title: string
  tagline: string
  icon: string
  skills: TechItem[]
}

const domains: DomainGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    tagline: 'High-throughput async APIs, transactional safety & payment engines',
    icon: 'server',
    skills: [
      { name: 'Python', tag: 'Async & Enterprise OOP', image: 'python' },
      { name: 'FastAPI', tag: 'High-Concurrency REST & SSE', image: 'fastapi' },
      { name: 'Django & DRF', tag: 'ORM, Migrations & APIs', image: 'django' },
      { name: 'PostgreSQL', tag: 'Relational & pgvector Indexing', image: 'postgresql' },
      { name: 'Payments', tag: 'ACLEDA Bank & Lemon Squeezy', icon: 'khqr' },
      { name: 'WebSockets & SSE', tag: 'Bi-Directional Live Streaming', icon: 'ws' },
    ]
  },
  {
    id: 'ai',
    title: 'LLMs Integration & RAG',
    tagline: 'Context-grounded RAG pipelines, vector search & Telegram bot automation',
    icon: 'sparkles',
    skills: [
      { name: 'LLM Integration', tag: 'OpenAI, Gemini & DeepSeek APIs', icon: 'llm' },
      { name: 'RAG Pipelines', tag: 'Hierarchical Chunking & Retrieval', icon: 'rag' },
      { name: 'LlamaIndex', tag: 'Document Ingestion & Query Engines', icon: 'llamaindex' },
      { name: 'pgvector', tag: 'Vector Similarity Search & Indexing', image: 'postgresql' },
      { name: 'Multi-LLM Routing', tag: 'Dynamic Prompt Fallback & Optimization', icon: 'workflow' },
      { name: 'Telegram Bot', tag: 'Contextual AI Assistant Automation', icon: 'bot' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    tagline: 'Modern, reactive interfaces with strict type-safety & sleek design systems',
    icon: 'layout',
    skills: [
      { name: 'Vue.js 3', tag: 'Composition API & Reactive State', image: 'vue' },
      { name: 'TypeScript', tag: 'Strict Contract Type-Safety', image: 'typescript' },
      { name: 'Next.js', tag: 'SSR & App Router Architecture', icon: 'nextjs' },
      { name: 'Tailwind CSS', tag: 'Custom Design Systems & Glassmorphism', image: 'tailwind' },
      { name: 'Vite', tag: 'Ultra-Fast ESM Bundling & HMR', image: 'vue' },
      { name: 'State Management', tag: 'Pinia & Reactive Architecture', icon: 'store' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    tagline: 'Reliable Linux administration, containerized environments & API testing',
    icon: 'terminal',
    skills: [
      { name: 'Linux Server Admin', tag: 'Ubuntu / Debian & systemd Services', image: 'linux' },
      { name: 'Docker & Compose', tag: 'Container Isolation & Multi-Stage', icon: 'docker' },
      { name: 'Git & GitHub', tag: 'Branching Workflows & Releases', image: 'git' },
      { name: 'Postman', tag: 'Automated Testing & OpenAPI Specs', image: 'postman' },
      { name: 'Nginx & SSL', tag: 'Reverse Proxy & Security Hardening', icon: 'shield' },
      { name: 'CI/CD Automation', tag: 'GitHub Actions & Deployment', icon: 'workflow' },
    ]
  },
]

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'LLM & RAG' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'devops', label: 'DevOps & Cloud' },
] as const

const activeCategory = ref<string>('all')

const filteredDomains = computed(() => {
  if (activeCategory.value === 'all') return domains
  return domains.filter(d => d.id === activeCategory.value)
})
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Header -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium tracking-wide mb-3">
          <span>// TECHNICAL EXPERTISE</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Skills & Technologies
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Production-tested frameworks, database engines, and AI orchestration tools I use daily.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div v-reveal="{ delay: 100 }" class="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat.id
            ? 'bg-amber-400/10 text-amber-300 border border-amber-400/40 font-semibold shadow-md scale-105'
            : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-800/80 shadow-xs'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Categorized Domain Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(domain, dIdx) in filteredDomains"
          :key="domain.id"
          v-reveal="{ delay: (dIdx + 1) * 80 }"
          class="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Domain Header -->
            <div class="flex items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
              <div class="flex items-center gap-3.5">
                <!-- Domain Icon -->
                <div class="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <!-- Server -->
                  <svg v-if="domain.icon === 'server'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke-width="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke-width="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" stroke-width="2" stroke-linecap="round" />
                    <line x1="6" y1="18" x2="6.01" y2="18" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <!-- Sparkles / AI -->
                  <svg v-else-if="domain.icon === 'sparkles'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <!-- Layout / Frontend -->
                  <svg v-else-if="domain.icon === 'layout'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2" />
                    <line x1="3" y1="9" x2="21" y2="9" stroke-width="2" />
                    <line x1="9" y1="21" x2="9" y2="9" stroke-width="2" />
                  </svg>
                  <!-- Terminal / DevOps -->
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="4 17 10 11 4 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <line x1="12" y1="19" x2="20" y2="19" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {{ domain.title }}
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {{ domain.tagline }}
                  </p>
                </div>
              </div>

              <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60 flex-shrink-0">
                {{ domain.skills.length }} Tech
              </span>
            </div>

            <!-- Tech Chips List (Clean 2-column) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              <div
                v-for="tech in domain.skills"
                :key="tech.name"
                class="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/40 hover:bg-slate-800/90 border border-slate-800/80 hover:border-amber-400/40 shadow-xs transition-all duration-200 group/item"
              >
                <!-- Tech Icon Container -->
                <div class="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center justify-center p-1.5 flex-shrink-0 group-hover/item:scale-105 transition-transform shadow-xs">
                  <!-- Python -->
                  <img
                    v-if="tech.image === 'python'"
                    src="@/assets/images/python.png"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- FastAPI -->
                  <img
                    v-else-if="tech.image === 'fastapi'"
                    src="@/assets/images/fastapi_logo.svg"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Django -->
                  <img
                    v-else-if="tech.image === 'django'"
                    src="@/assets/images/django.png"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- PostgreSQL -->
                  <img
                    v-else-if="tech.image === 'postgresql'"
                    src="@/assets/images/postgresql.png"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Vue -->
                  <img
                    v-else-if="tech.image === 'vue'"
                    src="@/assets/images/vue.svg"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- TypeScript -->
                  <img
                    v-else-if="tech.image === 'typescript'"
                    src="@/assets/images/ts.svg"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Tailwind -->
                  <img
                    v-else-if="tech.image === 'tailwind'"
                    src="@/assets/images/tailwind.webp"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Linux -->
                  <img
                    v-else-if="tech.image === 'linux'"
                    src="@/assets/images/linux.png"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Git -->
                  <img
                    v-else-if="tech.image === 'git'"
                    src="@/assets/images/git.png"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Postman -->
                  <img
                    v-else-if="tech.image === 'postman'"
                    src="@/assets/images/postman.svg"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                  <!-- Docker SVG -->
                  <svg
                    v-else-if="tech.icon === 'docker'"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="#2496ed"
                  >
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.956 0h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm5.886 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.956 0h2.12a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.144a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.19a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m21.758.917c-.443-.274-1.424-.415-2.48-.276-1.57.208-2.88 1.134-3.565 2.502-.455.91-.703 1.956-.703 3.064 0 .393.033.777.098 1.15H1.47a.99.99 0 00-.99.99 7.42 7.42 0 004.912 6.993c3.155 1.116 7.64 1.116 10.795 0a7.42 7.42 0 004.912-6.993.99.99 0 00-.99-.99h-.13c.09-.434.137-.883.137-1.341 0-1.898-.82-3.606-2.18-4.793z"/>
                  </svg>
                  <!-- Next.js SVG -->
                  <svg
                    v-else-if="tech.icon === 'nextjs'"
                    class="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 17.587l-6.398-8.286v8.286H9.72V6.413h1.706l6.634 8.604V6.413h1.54v11.174h-1.94z"/>
                  </svg>
                  <!-- KHQR / Payment -->
                  <svg
                    v-else-if="tech.icon === 'khqr'"
                    class="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2" />
                    <line x1="2" y1="10" x2="22" y2="10" stroke-width="2" />
                    <line x1="6" y1="15" x2="10" y2="15" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <!-- WebSockets / Streaming -->
                  <svg
                    v-else-if="tech.icon === 'ws'"
                    class="w-4 h-4 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <!-- LlamaIndex -->
                  <svg
                    v-else-if="tech.icon === 'llamaindex'"
                    class="w-4 h-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <!-- RAG -->
                  <svg
                    v-else-if="tech.icon === 'rag'"
                    class="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" stroke-width="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <!-- Multi-LLM -->
                  <svg
                    v-else-if="tech.icon === 'llm'"
                    class="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <!-- Autonomous Agents -->
                  <svg
                    v-else-if="tech.icon === 'agent'"
                    class="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2" />
                    <rect x="9" y="9" width="6" height="6" stroke-width="2" />
                    <line x1="9" y1="1" x2="9" y2="4" stroke-width="2" stroke-linecap="round" />
                    <line x1="15" y1="1" x2="15" y2="4" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <!-- Search / Embeddings -->
                  <svg
                    v-else-if="tech.icon === 'search'"
                    class="w-4 h-4 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <!-- Bot -->
                  <svg
                    v-else-if="tech.icon === 'bot'"
                    class="w-4 h-4 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <!-- Store -->
                  <svg
                    v-else-if="tech.icon === 'store'"
                    class="w-4 h-4 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6" />
                  </svg>
                  <!-- Shield / Nginx -->
                  <svg
                    v-else-if="tech.icon === 'shield'"
                    class="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <!-- Workflow / CI/CD -->
                  <svg
                    v-else
                    class="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3" stroke-width="2" />
                    <circle cx="6" cy="18" r="3" stroke-width="2" />
                    <circle cx="18" cy="12" r="3" stroke-width="2" />
                    <line x1="6" y1="9" x2="6" y2="15" stroke-width="2" />
                    <path d="M9 6h4a5 5 0 015 5v1" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>

                <!-- Text Info -->
                <div class="min-w-0 flex-1">
                  <span class="text-sm font-semibold text-slate-200 group-hover/item:text-amber-300 transition-colors truncate block">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
