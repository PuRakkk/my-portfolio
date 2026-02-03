<script setup lang="ts">
const currentYear = new Date().getFullYear()
const name = "Chon Sarak"

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="py-12 bg-dark-900 border-t border-dark-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center">
        <!-- Logo -->
        <a
          href="#home"
          class="text-2xl font-bold text-white tracking-wider mb-6"
          @click.prevent="scrollToSection('#home')"
        >
          <span class="text-gold-400">c</span>sarak
        </a>

        <!-- Navigation -->
        <nav class="flex flex-wrap justify-center gap-6 mb-8">
          <a
            v-for="link in footerLinks"
            :key="link.name"
            :href="link.href"
            class="text-gray-400 hover:text-gold-400 transition-colors text-sm"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Divider -->
        <div class="w-full max-w-xs h-px bg-dark-700 mb-8"></div>

        <!-- Copyright -->
        <div class="text-center">
          <p class="text-gray-500 text-sm mb-2">
            &copy; {{ currentYear }} {{ name }}. All rights reserved.
          </p>
          <p class="text-gray-600 text-xs">
            Designed & Built with <span class="text-gold-400">&#10084;</span> using Vue.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
