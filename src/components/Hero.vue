<script setup lang="ts">
const name = "CHON SARAK"
const title = "A Backend Developer who turns ideas into reliable, production-ready systems. Focused on performance, clean architecture, and scalable server-side solutions"

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const stat = { value: '10+', label: 'Projects Completed' }

const techStack = [
  { name: 'Django', color: '#092e20' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Linux', color: '#fcc624' },
  { name: 'Vue', color: '#42b883' },
]
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center relative overflow-hidden"
  >
    <!-- Dark Red & Gold Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Dark red orb - top right -->
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-950/40 rounded-full blur-3xl animate-orb-float"></div>

      <!-- Gold/amber orb - bottom left -->
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float-delayed"></div>

      <!-- Subtle red accent - center right -->
      <div class="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-rose-950/30 rounded-full blur-3xl animate-orb-pulse"></div>

      <!-- Gold accent near image -->
      <div class="absolute top-1/2 right-1/3 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-float-slow"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <!-- Animated Slicing Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Diagonal lines sweeping across -->
      <div class="slice-line slice-line-1"></div>
      <div class="slice-line slice-line-2"></div>
      <div class="slice-line slice-line-3"></div>
      <div class="slice-line slice-line-4"></div>
      <div class="slice-line slice-line-5"></div>

      <!-- Horizontal accent lines -->
      <div class="h-line h-line-1"></div>
      <div class="h-line h-line-2"></div>

      <!-- Vertical accent lines -->
      <div class="v-line v-line-1"></div>
      <div class="v-line v-line-2"></div>
    </div>

    <!-- Floating particles - mix of gold and warm tones -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-float"></div>
      <div class="absolute top-40 left-1/4 w-1 h-1 bg-amber-400/50 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-40 left-20 w-1.5 h-1.5 bg-gold-400/30 rounded-full animate-float"></div>
      <div class="absolute top-1/3 left-1/2 w-1 h-1 bg-red-400/20 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300/20 rounded-full animate-float"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24 lg:py-20">

        <!-- Mobile Profile Image (shows on small screens) -->
        <div class="relative lg:hidden flex justify-center order-1 mb-8">
          <!-- Mobile Glow Effect -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-red-900/20 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-gold-500/15 rounded-full blur-2xl"></div>

          <!-- Mobile Image Container -->
          <div class="relative z-10">
            <div class="relative group">
              <!-- Gradient border -->
              <div class="absolute -inset-0.5 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 rounded-2xl"></div>

              <!-- Shimmer effect -->
              <div class="absolute -inset-0.5 rounded-2xl overflow-hidden">
                <div class="shimmer-border"></div>
              </div>

              <!-- Inner frame - Mobile size -->
              <div class="relative w-56 h-72 sm:w-64 sm:h-80 bg-dark-800 rounded-xl overflow-hidden">
                <!-- Corner accents -->
                <div class="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold-400/50 rounded-tl-xl animate-corner-pulse"></div>
                <div class="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold-400/50 rounded-tr-xl animate-corner-pulse-delay-1"></div>
                <div class="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold-400/50 rounded-bl-xl animate-corner-pulse-delay-2"></div>
                <div class="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold-400/50 rounded-br-xl animate-corner-pulse-delay-3"></div>

                <!-- Inner shimmer sweep (slicing effect) -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                  <div class="shimmer-sweep"></div>
                </div>

                <!-- Image -->
                <img
                  src="@/assets/images/me2.png"
                  alt="Chon Sarak"
                  class="w-full h-full object-cover"
                />

                <!-- Gradient overlay at bottom -->
                <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-900/90 to-transparent"></div>

                <!-- Name badge -->
                <div class="absolute bottom-3 left-3 right-3">
                  <div class="bg-dark-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-400/20">
                    <p class="text-gold-400 text-xs font-medium text-center">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Left Content (Text) -->
        <div class="relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <p class="text-gray-400 text-base lg:text-lg mb-3 lg:mb-4 animate-fade-in">
            Hello I'm
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 animate-slide-up tracking-tight">
            {{ name }}
          </h1>
          <p class="text-gray-400 text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8 lg:mb-10 animate-fade-in-delay leading-relaxed">
            {{ title }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3 lg:gap-4 mb-10 lg:mb-16 animate-fade-in-delay-2 justify-center lg:justify-start">
            <button
              @click="scrollToSection('#projects')"
              class="group px-6 lg:px-8 py-3 lg:py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 text-sm lg:text-base"
            >
              See projects
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              @click="scrollToSection('#about')"
              class="group px-6 lg:px-8 py-3 lg:py-4 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 lg:gap-3 hover:text-gold-400 text-sm lg:text-base"
            >
              <span class="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                <svg class="w-3 h-3 lg:w-4 lg:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              More about me
            </button>
          </div>

          <!-- Stats -->
          <div class="flex items-center gap-4 lg:gap-6 animate-fade-in-delay-2 justify-center lg:justify-start">
            <div class="flex items-center">
              <div class="flex -space-x-2 lg:-space-x-3">
                <div
                  v-for="(tech, index) in techStack"
                  :key="index"
                  class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border-2 border-dark-900 flex items-center justify-center overflow-hidden p-1"
                  :title="tech.name"
                >
                  <!-- Django -->
                  <svg v-if="tech.name === 'Django'" class="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 128 128">
                    <path fill="#44b78b" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.543z"/>
                    <path fill="#44b78b" d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14.135 2.99-6.116 3.943-13.182 3.943-30.848V32.321zM94.237 0h20.93v20.93h-20.93z"/>
                  </svg>
                  <!-- FastAPI -->
                  <svg v-else-if="tech.name === 'FastAPI'" class="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 128 128">
                    <path fill="#009688" d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm0 14c27.57 0 50 22.43 50 50s-22.43 50-50 50-50-22.43-50-50 22.43-50 50-50z"/>
                    <path fill="#009688" d="M64 28L44 68h15v32l25-44H69V28z"/>
                  </svg>
                  <!-- PostgreSQL -->
                  <img
                    v-else-if="tech.name === 'PostgreSQL'"
                    src="@/assets/images/postgresql.png"
                    alt="PostgreSQL"
                    class="w-full h-full object-contain"
                  />
                  <!-- Linux -->
                  <img
                    v-else-if="tech.name === 'Linux'"
                    src="@/assets/images/linux.png"
                    alt="Linux"
                    class="w-full h-full object-contain"
                  />
                  <!-- Vue.js -->
                  <svg v-else-if="tech.name === 'Vue'" class="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 128 128">
                    <path fill="#42b883" d="M78.8 10L64 35.4 49.2 10H0l64 110 64-110z"/>
                    <path fill="#35495e" d="M78.8 10L64 35.4 49.2 10H25.6L64 76 102.4 10z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div class="text-2xl lg:text-3xl font-bold text-white">{{ stat.value }}</div>
              <div class="text-gray-500 text-xs lg:text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Desktop Profile Image (shows on large screens) -->
        <div class="relative hidden lg:block order-2">
          <!-- Glow Effect Background - warm red and gold -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-900/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gold-500/15 rounded-full blur-3xl animate-orb-pulse"></div>

          <!-- Profile Image Container -->
          <div class="relative z-10 flex justify-center">
            <!-- Animated Gradient Border with Shimmer -->
            <div class="relative group">
              <!-- Outer rotating gradient border -->
              <div class="absolute -inset-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate"></div>

              <!-- Static gradient border -->
              <div class="absolute -inset-0.5 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 rounded-2xl"></div>

              <!-- Shimmer effect overlay -->
              <div class="absolute -inset-0.5 rounded-2xl overflow-hidden">
                <div class="shimmer-border"></div>
              </div>

              <!-- Inner frame -->
              <div class="relative w-80 h-[450px] bg-dark-800 rounded-xl overflow-hidden">
                <!-- Corner accents with pulse -->
                <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-400/50 rounded-tl-xl animate-corner-pulse"></div>
                <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-400/50 rounded-tr-xl animate-corner-pulse-delay-1"></div>
                <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-400/50 rounded-bl-xl animate-corner-pulse-delay-2"></div>
                <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-400/50 rounded-br-xl animate-corner-pulse-delay-3"></div>

                <!-- Inner shimmer sweep -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                  <div class="shimmer-sweep"></div>
                </div>

                <!-- Image -->
                <img
                  src="@/assets/images/me2.png"
                  alt="Chon Sarak"
                  class="w-full h-full object-cover"
                />

                <!-- Gradient overlay at bottom -->
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900/90 to-transparent"></div>

                <!-- Name badge with glow -->
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="bg-dark-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-gold-400/20 badge-glow">
                    <p class="text-gold-400 text-sm font-medium">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating decorative elements -->
          <div class="absolute top-10 right-0 w-3 h-3 bg-gold-400 rounded-full animate-float"></div>
          <div class="absolute top-32 -right-4 w-2 h-2 bg-gold-400/60 rounded-full animate-float-delayed"></div>
          <div class="absolute bottom-32 right-4 w-2 h-2 bg-gold-400/40 rounded-full animate-float"></div>

          <!-- Side text -->
          <div class="absolute bottom-20 -right-4 text-gold-400/60 text-xs font-medium tracking-widest transform rotate-90 origin-right">
            AVAILABLE FOR HIRE
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button @click="scrollToSection('#about')" class="text-gray-500 hover:text-gold-400 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  </section>
</template>
