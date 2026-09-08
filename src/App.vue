<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-[#0B0F19] text-slate-200 relative selection:bg-amber-500/30 selection:text-amber-200 font-sans">
    <!-- Ambient Backdrop Architecture -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Deep Slate Navy Base -->
      <div class="absolute inset-0 bg-[#0B0F19]"></div>

      <!-- Fine Dot Grid Texture -->
      <div class="absolute inset-0 bg-dot-grid opacity-35"></div>

      <!-- Soft Luminous Radial Glows (Slate Blue, Deep Indigo & Subtle Amber) -->
      <div class="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-glow"></div>
      <div class="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[160px]"></div>
      <div class="absolute bottom-1/4 right-[-100px] w-[600px] h-[600px] bg-amber-500/[0.07] rounded-full blur-[180px]"></div>

      <!-- Top Vignette Gradient -->
      <div class="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0B0F19]/90 to-transparent"></div>
    </div>

    <!-- Foreground Content -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>

    <!-- Floating Back-to-Top Button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
    >
      <svg class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

