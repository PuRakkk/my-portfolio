<script setup lang="ts">
const currentYear = new Date().getFullYear()
const name = "Chon Sarak"

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

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
</script>

<template>
  <footer class="py-12 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/80 relative z-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
        
        <!-- Logo & Title -->
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold font-mono text-sm shadow-xs">
            CS
          </span>
          <div>
            <span class="font-bold text-white tracking-tight">Chon Sarak</span>
            <p class="text-xs text-slate-400 font-mono">Full-Stack Developer & AI Systems</p>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-wrap items-center justify-center gap-6">
          <a
            v-for="link in footerLinks"
            :key="link.name"
            :href="link.href"
            class="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <a
            href="mailto:sarakchon11@gmail.com"
            class="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/50 shadow-xs transition-all"
            title="Email"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/chon-sarak-b9922836a"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/50 shadow-xs transition-all"
            title="LinkedIn"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://t.me/Sarak_chon"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/50 shadow-xs transition-all"
            title="Telegram"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

      </div>

      <!-- Copyright Bar -->
      <div class="pt-6 flex items-center justify-center text-center text-xs text-slate-500">
        <p>&copy; {{ currentYear }} {{ name }}. Built with precision in Phnom Penh, Cambodia.</p>
      </div>
    </div>
  </footer>
</template>

