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
  { name: 'Portfolio', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active link based on scroll position
  const sections = navLinks.map(link => link.href)
  for (const section of sections.reverse()) {
    const element = document.querySelector(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100) {
        activeLink.value = section
        break
      }
    }
  }
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navbarHeight = 80
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
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a
          href="#home"
          class="text-2xl font-bold text-white tracking-wider"
          @click.prevent="scrollToSection('#home')"
        >
          <span class="text-gold-400">c</span>sarak
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="relative text-sm font-medium transition-colors duration-200"
            :class="activeLink === link.href ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Contact Button -->
        <a
          href="#contact"
          class="hidden md:inline-flex px-6 py-2.5 border border-gold-400 text-gold-400 rounded-full text-sm font-medium hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
          @click.prevent="scrollToSection('#contact')"
        >
          Contact Me
        </a>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-dark-900/98 backdrop-blur-md pb-4 border-t border-dark-600"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="block px-4 py-3 transition-colors duration-200"
          :class="activeLink === link.href ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'"
          @click.prevent="scrollToSection(link.href)"
        >
          {{ link.name }}
        </a>
        <a
          href="#contact"
          class="block mx-4 mt-3 px-6 py-2.5 border border-gold-400 text-gold-400 rounded-full text-sm font-medium text-center hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
          @click.prevent="scrollToSection('#contact')"
        >
          Contact Me
        </a>
      </div>
    </div>
  </nav>
</template>
