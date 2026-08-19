<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white relative selection:bg-gold-500/30 selection:text-gold-300">
    <!-- Global Sticky/Fixed Animated Background -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Dark Red & Gold Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

      <!-- Animated Gradient Orbs -->
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-950/40 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-rose-950/30 rounded-full blur-3xl animate-orb-pulse"></div>
      <div class="absolute top-1/2 right-1/3 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-float-slow"></div>

      <!-- Subtle vignette overlay -->
      <div class="absolute inset-0 bg-radial-vignette"></div>

      <!-- Animated Slicing Lines -->
      <div class="slice-line slice-line-1"></div>
      <div class="slice-line slice-line-2"></div>
      <div class="slice-line slice-line-3"></div>
      <div class="slice-line slice-line-4"></div>
      <div class="slice-line slice-line-5"></div>
      <div class="h-line h-line-1"></div>
      <div class="h-line h-line-2"></div>
      <div class="v-line v-line-1"></div>
      <div class="v-line v-line-2"></div>

      <!-- Floating particles - mix of gold and warm tones -->
      <div class="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-float"></div>
      <div class="absolute top-40 left-1/4 w-1 h-1 bg-amber-400/50 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-40 left-20 w-1.5 h-1.5 bg-gold-400/30 rounded-full animate-float"></div>
      <div class="absolute top-1/3 left-1/2 w-1 h-1 bg-red-400/20 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300/20 rounded-full animate-float"></div>
    </div>

    <!-- Page Content (Foreground) -->
    <div class="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>
