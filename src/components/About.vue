<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Happy Clients', value: '5+' },
]

const highlights = [
  'Building scalable REST APIs and microservices',
  'Database design and optimization with PostgreSQL',
  'Server deployment and DevOps with Linux/Ubuntu',
  'Clean architecture and maintainable code',
]

const technologies = [
  { name: 'Django', category: 'Framework' },
  { name: 'DRF', category: 'Framework' },
  { name: 'FastAPI', category: 'Framework' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Linux Server', category: 'Server' },
]

// Image slideshow
const images = [
  { src: new URL('@/assets/images/me2.png', import.meta.url).href, alt: 'Chon Sarak - Profile 1' },
  { src: new URL('@/assets/images/me2.png', import.meta.url).href, alt: 'Chon Sarak - Profile 2' },
  { src: new URL('@/assets/images/me2.png', import.meta.url).href, alt: 'Chon Sarak - Profile 3' },
]

const currentImageIndex = ref(0)
let intervalId: number | null = null

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

onMounted(() => {
  intervalId = window.setInterval(nextImage, 3000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <section id="about" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Dark Red & Gold Gradient Background (same as Hero) -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-950/30 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-amber-900/15 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-rose-950/20 rounded-full blur-3xl animate-orb-pulse"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <!-- Animated Slicing Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="slice-line slice-line-1"></div>
      <div class="slice-line slice-line-2"></div>
      <div class="slice-line slice-line-3"></div>
      <div class="h-line h-line-1"></div>
      <div class="h-line h-line-2"></div>
      <div class="v-line v-line-1"></div>
      <div class="v-line v-line-2"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">About Me</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Know Me More</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Stacked Image Slideshow -->
        <div class="relative">
          <div class="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gold-500/20 rounded-2xl blur-2xl animate-pulse-slow"></div>

            <!-- Back layer image (rotated) -->
            <div class="absolute inset-0 rounded-2xl overflow-hidden transform rotate-6 border border-gold-400/30">
              <img
                src="@/assets/images/me2.png"
                alt="Chon Sarak"
                class="w-full h-full object-cover opacity-60"
              />
              <div class="absolute inset-0 bg-dark-900/40"></div>
            </div>

            <!-- Middle layer image (slightly rotated) -->
            <div class="absolute inset-0 rounded-2xl overflow-hidden transform rotate-3 border border-gold-400/20">
              <img
                src="@/assets/images/me2.png"
                alt="Chon Sarak"
                class="w-full h-full object-cover opacity-80"
              />
              <div class="absolute inset-0 bg-dark-900/20"></div>
            </div>

            <!-- Main front image with slice animation -->
            <div class="absolute inset-0 bg-dark-800 rounded-2xl overflow-hidden border border-gold-400/20">
              <!-- Image slideshow with slice effect -->
              <div class="relative w-full h-full">
                <template v-for="(image, index) in images" :key="index">
                  <div
                    class="absolute inset-0 transition-all duration-700 ease-in-out"
                    :class="{
                      'opacity-100 translate-x-0': currentImageIndex === index,
                      'opacity-0 -translate-x-full': currentImageIndex !== index,
                    }"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </template>

                <!-- Slice line effect during transition -->
                <div class="absolute inset-0 pointer-events-none overflow-hidden">
                  <div class="about-slice-line about-slice-1"></div>
                  <div class="about-slice-line about-slice-2"></div>
                  <div class="about-slice-line about-slice-3"></div>
                </div>
              </div>

              <!-- Gradient overlay -->
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>

              <!-- Image indicator dots -->
              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <button
                  v-for="(_, index) in images"
                  :key="index"
                  @click="currentImageIndex = index"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="currentImageIndex === index ? 'bg-gold-400 w-4' : 'bg-white/30 hover:bg-white/50'"
                ></button>
              </div>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -bottom-4 -left-4 w-24 h-24 border border-gold-400/20 rounded-lg"></div>
          <div class="absolute -top-4 -right-4 w-16 h-16 border border-gold-400/20 rounded-lg"></div>

          <!-- Floating tech icons around image -->
          <div class="absolute -right-2 top-1/4 w-10 h-10 bg-dark-700 rounded-lg border border-gold-400/20 flex items-center justify-center animate-float">
            <img src="@/assets/images/python.png" alt="Python" class="w-6 h-6 object-contain" />
          </div>
          <div class="absolute -left-2 bottom-1/4 w-10 h-10 bg-dark-700 rounded-lg border border-gold-400/20 flex items-center justify-center animate-float-delayed">
            <img src="@/assets/images/python.png" alt="Python" class="w-6 h-6 object-contain" />
          </div>
        </div>

        <!-- Right side - Content -->
        <div>
          <h3 class="text-2xl font-semibold text-white mb-2">
            I'm <span class="text-gold-400">Chon Sarak</span>,
          </h3>
          <h4 class="text-xl text-gray-400 mb-6">a Backend Developer based in Cambodia</h4>
          <p class="text-gray-400 mb-6 leading-relaxed">
            I'm a backend developer specializing in building robust, scalable server-side applications
            and APIs. With expertise in Django and FastAPI, I focus on creating efficient systems
            that power modern web applications.
          </p>
          <p class="text-gray-400 mb-8 leading-relaxed">
            My approach combines clean architecture principles with performance optimization,
            ensuring that every system I build is maintainable, secure, and ready for production.
            I'm passionate about database design, API development, and server infrastructure.
          </p>

          <!-- Highlights -->
          <ul class="space-y-3 mb-8">
            <li
              v-for="highlight in highlights"
              :key="highlight"
              class="flex items-center text-gray-300"
            >
              <svg class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ highlight }}
            </li>
          </ul>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center p-4 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-gold-400/10"
            >
              <div class="text-2xl sm:text-3xl font-bold text-gold-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Tech Stack Pills -->
          <div>
            <p class="text-gray-500 text-sm mb-3">Technologies I work with:</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in technologies"
                :key="tech.name"
                class="px-3 py-1.5 bg-dark-700/50 border border-gold-400/20 rounded-full text-sm text-gray-300 hover:border-gold-400/50 transition-colors"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
