<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { name: 'Email', href: 'mailto:sarakchon11@gmail.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chon-sarak-b9922836a' },
  { name: 'Telegram', href: 'https://t.me/Sarak_chon' },
  { name: 'Resume', href: '/CHON_SARAK_CV_2026.pdf' },
]
</script>

<template>
  <footer class="border-t border-line">
    <div class="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
      <p>&copy; {{ currentYear }} Chon Sarak</p>
      <nav class="flex items-center gap-6">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          :target="link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined"
          rel="noopener noreferrer"
          class="hover:text-fg transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>
    </div>
  </footer>
</template>
