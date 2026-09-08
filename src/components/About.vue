<script setup lang="ts">
// Focused single-narrative description
</script>

<template>
  <section id="about" class="py-20 lg:py-28 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Header -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] sm:text-xs font-mono font-medium tracking-wide mb-3">
          <span>// BACKGROUND & ETHOS</span>
        </div>
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-2.5 sm:mb-3">
          From System Reliability to Modern AI SaaS
        </h2>
        <p class="text-slate-400 text-xs sm:text-sm leading-relaxed px-2">
          How a background in hardware diagnostics and backend rigor shapes the way I build production software.
        </p>
      </div>

      <!-- 2-Column Layout: Journey Narrative (Left) & Portrait (Right) -->
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Journey Narrative Card: order-2 on mobile (below image), lg:order-1 on desktop (left 7 cols) -->
        <div v-reveal="{ delay: 100 }" class="order-2 lg:order-1 lg:col-span-7 rounded-3xl p-6 sm:p-8 md:p-10 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/20 relative overflow-hidden">
          <!-- Ambient subtle accent glow -->
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400"></span>
            <span class="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">The Engineering Journey</span>
          </div>

          <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 leading-snug">
            Every resilient distributed system starts with an obsession over edge cases.
          </h3>

          <div class="space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              My engineering path began in hardware diagnostics, networking, and QA at POSFlow Solutions. Troubleshooting thermal printers, retail LAN/WAN networks, and point-of-sale systems under strict uptime requirements instilled a lasting respect for system resilience and failure recovery.
            </p>

            <p>
              Transitioning to backend engineering at EZZE Technology, I built high-throughput Django REST Framework services, automated Telegram bots, and integrated local Cambodian QR payment gateways on Linux servers.
            </p>

            <p class="text-slate-400">
              Today, as an independent full-stack engineer, I combine that operational rigor with modern AI workflows — architecting multi-tenant SaaS platforms like ChatEaver and high-traffic ticketing engines like SportPro.
            </p>
          </div>
        </div>

        <!-- Elevated Portrait Card: order-1 on mobile (top), lg:order-2 on desktop (right 5 cols) -->
        <div v-reveal="{ delay: 200 }" class="order-1 lg:order-2 lg:col-span-5 flex justify-center relative">
          <!-- Ambient Halo Light -->
          <div class="absolute inset-0 bg-blue-600/15 rounded-3xl blur-3xl scale-95 pointer-events-none"></div>

          <!-- Glass Frame Card -->
          <div class="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-3 bg-slate-900/70 border border-slate-700/70 backdrop-blur-xl shadow-2xl shadow-black/40 group">

            <!-- Inner Image Container -->
            <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
              <img
                src="@/assets/images/me2.png"
                alt="Chon Sarak"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <!-- Subtle Bottom Vignette Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent"></div>

              <!-- Portrait Bottom Card Overlay -->
              <div class="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 shadow-xl">
                <div class="flex items-center justify-between">
                  <div>
                    <h2 class="text-sm font-bold text-white tracking-tight">Chon Sarak</h2>
                    <p class="text-[11px] text-amber-400 font-mono">Full-Stack Developer</p>
                  </div>
                  <div class="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-mono">
                    <svg class="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Cambodia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
