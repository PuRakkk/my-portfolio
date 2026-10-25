<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section id="about" class="py-14 sm:py-20 border-t border-line">
    <div class="container-page">
      <SectionHeading
        index="01"
        label="About"
      />

      <div class="grid md:grid-cols-12 gap-10 md:gap-8">
        <!-- Portrait -->
        <div v-reveal="{ delay: 80 }" class="md:col-span-3">
          <div class="aspect-[4/5] w-full max-w-[180px] md:max-w-[220px] mx-auto md:mx-0 rounded-lg overflow-hidden border border-line bg-surface">
            <img
              src="@/assets/images/me2-480.webp"
              alt="Portrait of Chon Sarak"
              width="480"
              height="643"
              class="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Narrative -->
        <div v-reveal="{ delay: 140 }" class="md:col-span-9 md:pl-0">
          <p class="text-lg sm:text-2xl leading-snug text-fg max-w-3xl text-pretty">
            Every resilient system starts with an obsession over edge cases.
          </p>

          <div class="mt-4 sm:mt-6 space-y-4 text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
            <p>
              I started in QA and technical support at POSFlow Solutions, keeping retail systems running under strict uptime. That taught me to plan for failure.
            </p>
            <p>
              At EZZE Technology I moved into backend work with Django, Telegram bots, and QR payments. As a freelancer I then built full products like ChatEaver, SportPro, and Chessman Topup.
            </p>
            <p>
              Today I'm an AI Automation Engineer at Twenty Twenty, building AI pipelines that do slow, manual work automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
