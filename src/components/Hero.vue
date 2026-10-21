<script setup lang="ts">
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navbarHeight = 72
    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '4', label: 'Shipped systems' },
  { value: '100%', label: 'Delivery rate' },
]
</script>

<template>
  <section id="home" class="pt-28 pb-14 sm:pt-36 sm:pb-20">
    <div class="container-page">
      <!-- Headline -->
      <h1 v-reveal="{ delay: 60 }" class="text-[2rem] leading-[1.1] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-fg max-w-4xl text-balance">
        Full-Stack and <span class="text-accent">AI Automation</span> Engineer
      </h1>

      <p v-reveal="{ delay: 120 }" class="mt-6 sm:mt-8 text-base sm:text-xl text-muted leading-relaxed max-w-2xl">
        I'm Chon Sarak. I build high-concurrency web apps, resilient APIs with FastAPI &amp; Django,
        and production-grade RAG workflows — turning complex ideas into software that ships.
      </p>

      <!-- CTAs -->
      <div v-reveal="{ delay: 180 }" class="mt-10 flex flex-wrap items-center gap-3">
        <button class="btn-primary" @click="scrollToSection('#projects')">
          View projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </button>
        <a href="/CHON-SARAK-2026.pdf" target="_blank" download="CHON-SARAK-2026.pdf" class="btn-secondary">
          Download CV
        </a>
      </div>

      <!-- Key Metrics -->
      <dl v-reveal="{ delay: 240 }" class="mt-14 sm:mt-20 grid grid-cols-3 border-t border-line max-w-3xl">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="pt-6 flex flex-col-reverse"
          :class="i > 0 ? 'pl-4 sm:pl-8 border-l border-line' : ''"
        >
          <dt class="text-xs sm:text-sm text-muted">{{ stat.label }}</dt>
          <dd class="text-2xl sm:text-4xl font-semibold tracking-tight text-fg mb-1">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
