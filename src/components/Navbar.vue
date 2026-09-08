<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeLink = ref('#home')

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30

  // Update active link based on scroll position
  const sections = navLinks.map(link => link.href)
  for (const section of [...sections].reverse()) {
    const element = document.querySelector(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 140) {
        activeLink.value = section
        break
      }
    }
  }
}

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
  activeLink.value = href
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 pb-2">
    <div class="max-w-6xl mx-auto">
      <nav
        class="transition-all duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between"
        :class="isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border border-slate-700/70 shadow-lg shadow-black/20 ring-1 ring-white/5' 
          : 'bg-slate-900/50 backdrop-blur-md border border-slate-800/80 shadow-sm shadow-black/10'"
      >
        <!-- Logo / Brand -->
        <a
          href="#home"
          class="flex items-center gap-2.5 group text-white font-medium text-lg tracking-tight"
          @click.prevent="scrollToSection('#home')"
        >
          <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold font-mono text-sm shadow-sm group-hover:scale-105 transition-transform">
            CS
          </span>
          <span class="font-bold text-white tracking-tight text-base sm:text-lg">
            Chon <span class="text-amber-400">Sarak</span>
          </span>
        </a>

        <!-- Desktop Navigation Pills -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-950/60 p-1 rounded-full border border-slate-800/80">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200"
            :class="activeLink === link.href 
              ? 'text-white bg-slate-800/90 shadow-xs font-semibold' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Right Side CTA / Status -->
        <div class="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            @click.prevent="scrollToSection('#contact')"
          >
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <button
          class="md:hidden w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/70 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle Menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-95"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-2 p-3 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-800/90 shadow-2xl space-y-1"
        >
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
            :class="activeLink === link.href 
              ? 'bg-amber-400/10 text-amber-300 font-semibold' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
          <div class="pt-2 border-t border-slate-800/80 mt-2">
            <a
              href="#contact"
              class="block w-full py-2.5 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 transition-colors shadow-md"
              @click.prevent="scrollToSection('#contact')"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

