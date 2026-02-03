<script setup lang="ts">
interface Experience {
  id: number
  company: string
  role: string
  period: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Freelancer',
    role: 'Full-Stack Developer',
    period: '2025 - Present',
    responsibilities: [
      'Building web applications for clients',
      'Developed Cainvite - an online platform for selling modern wedding invitation templates',
      'Creating full-stack solutions using Django, DRF, and Vue.js',
      'Designing and managing PostgreSQL databases',
      'Providing ongoing maintenance and support for client projects',
    ],
  },
  {
    id: 2,
    company: 'EZZE Technology',
    role: 'Backend Developer',
    period: '2024 - 2025',
    responsibilities: [
      'Worked as a Full-Stack Developer using DRF and Vue.js',
      'Developed dashboard using Vue.js',
      'Developed Telegram bots with Django and FastAPI',
      'Integrated local payment gateways for QR transactions',
      'Built and deployed Django apps with PostgreSQL',
      'Created RESTful APIs with Django Rest Framework',
      'Deployed high-performance backends using FastAPI',
      'Configured Apache, Gunicorn, and SSL on Linux servers',
      'Designed and built a desktop app with Python',
      'Used Git and GitHub for version control and teamwork',
      'Designed and managed MySQL and PostgreSQL databases',
      'Built and documented APIs with secure authentication',
      'Connected Telegram bots to backends for notifications',
    ],
  },
  {
    id: 3,
    company: 'POSFlow Solutions',
    role: 'QA Technical Support',
    period: '2023 - 2024',
    responsibilities: [
      'Provided technical support for POS (Point of Sale) systems',
      'Configured and maintained thermal printers and POS peripherals',
      'Installed and troubleshooted routers, LAN, and WAN networks',
      'Delivered customer support and resolved technical issues',
      'Performed system testing, troubleshooting, and quality assurance',
      'Troubleshooted desktop computers, OS, hardware, and software',
    ],
  },
]
</script>

<template>
  <section id="experience" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Dark Red & Gold Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-[400px] h-[400px] bg-red-950/30 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-pulse"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">My Journey</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          A timeline of my professional journey and the roles I've held
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600"></div>

        <!-- Experience items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative"
          >
            <!-- Timeline dot -->
            <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-dark-900 z-10"></div>

            <!-- Content card -->
            <div
              :class="[
                'ml-8 md:ml-0 md:w-[calc(50%-2rem)]',
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              ]"
            >
              <div class="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-gold-400/30 transition-all duration-300">
                <!-- Header -->
                <div class="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-white">{{ exp.company }}</h3>
                    <p class="text-gold-400 font-medium">{{ exp.role }}</p>
                  </div>
                  <span class="px-3 py-1 text-sm bg-gold-400/10 text-gold-400 rounded-full border border-gold-400/20">
                    {{ exp.period }}
                  </span>
                </div>

                <!-- Responsibilities -->
                <ul class="space-y-2">
                  <li
                    v-for="(resp, respIndex) in exp.responsibilities"
                    :key="respIndex"
                    class="flex items-start text-gray-400 text-sm"
                  >
                    <svg class="w-4 h-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    {{ resp }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
