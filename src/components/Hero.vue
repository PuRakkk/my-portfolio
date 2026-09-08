<script setup lang="ts">
const name = "Chon Sarak"
const headline = "Architecting Modern Web & AI-Powered Systems"
const description = "Full-Stack Developer & AI Systems Builder based in Cambodia. Specializing in high-performance backends with FastAPI & Django, modern frontends with Vue.js & Next.js, and production-grade Agentic RAG workflows."

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navbarHeight = 90
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Shipped Systems' },
  { value: '100%', label: 'Delivery Rate' },
]

</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 relative overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">

      <!-- Headline -->
      <h1 v-reveal class="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
        <span class="text-gradient-gold">Full-Stack Developer</span>
        <span class="block text-slate-200 text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold font-sans">
          & AI Systems Engineer
        </span>
      </h1>

      <!-- Value Hook Description -->
      <p v-reveal="{ delay: 100 }" class="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
        I architect high-concurrency web applications, resilient backend APIs, and production-grade Agentic RAG workflows — turning complex business ideas into scalable, real-world software.
      </p>

      <!-- CTAs -->
      <div v-reveal="{ delay: 180 }" class="flex flex-wrap items-center justify-center gap-4 mb-14">
        <button
          @click="scrollToSection('#projects')"
          class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold text-sm hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 group"
        >
          <span>Explore Projects</span>
          <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <a
          href="/CHON-SARAK-2026.pdf"
          target="_blank"
          download="CHON-SARAK-2026.pdf"
          class="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all flex items-center gap-2 hover:border-amber-400/50 shadow-sm"
        >
          <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download CV</span>
        </a>

        <button
          @click="scrollToSection('#about')"
          class="px-5 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5"
        >
          <span>About Me</span>
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <!-- Key Metrics -->
      <div v-reveal="{ delay: 240 }" class="grid grid-cols-3 gap-6 sm:gap-12 max-w-xl mx-auto pt-8 border-t border-slate-800/80">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">{{ stat.value }}</div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
