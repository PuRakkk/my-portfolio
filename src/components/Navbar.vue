<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeLink = ref('#home')

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10

  // Update active link based on scroll position
  const sections = ['#home', ...navLinks.map(link => link.href)]
  for (const section of [...sections].reverse()) {
    const element = document.querySelector(section)
    if (element && element.getBoundingClientRect().top <= 120) {
      activeLink.value = section
      break
    }
  }
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navbarHeight = 72
    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
  activeLink.value = href
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b"
    :class="isScrolled || isMobileMenuOpen
      ? 'bg-bg/85 backdrop-blur-md border-line'
      : 'bg-transparent border-transparent'"
  >
    <nav class="container-page h-16 flex items-center justify-between">
      <!-- Brand -->
      <a
        href="#home"
        class="font-semibold tracking-tight text-fg"
        @click.prevent="scrollToSection('#home')"
      >
        Chon Sarak
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm transition-colors"
          :class="activeLink === link.href ? 'text-fg' : 'text-muted hover:text-fg'"
          @click.prevent="scrollToSection(link.href)"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="w-9 h-9 rounded-md flex items-center justify-center text-muted hover:text-fg hover:bg-surface transition-colors"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <!-- Sun -->
          <svg v-if="theme === 'dark'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" stroke-width="2" />
            <path stroke-linecap="round" stroke-width="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
          </svg>
          <!-- Moon -->
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <a
          href="/CHON_SARAK_CV_2026.pdf"
          target="_blank"
          class="hidden sm:inline-flex btn-secondary !px-4 !py-1.5"
        >
          Resume
        </a>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-muted hover:text-fg transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-line">
      <div class="container-page py-3 flex flex-col">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="py-3 text-base border-b border-line last:border-b-0 transition-colors"
          :class="activeLink === link.href ? 'text-fg' : 'text-muted'"
          @click.prevent="scrollToSection(link.href)"
        >
          {{ link.name }}
        </a>
        <a href="/CHON_SARAK_CV_2026.pdf" target="_blank" class="btn-primary justify-center mt-4 mb-2">
          Download Resume
        </a>
      </div>
    </div>
  </header>
</template>
