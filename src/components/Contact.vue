<script setup lang="ts">
import { ref } from 'vue'

const FORMSPREE_ID = 'maqbkojb'

interface FormData {
  name: string
  email: string
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const emailCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('sarakchon11@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy email', err)
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
    })

    if (response.ok) {
      form.value = { name: '', email: '', message: '' }
      submitStatus.value = 'success'
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    submitStatus.value = 'error'
  }

  isSubmitting.value = false

  setTimeout(() => {
    submitStatus.value = 'idle'
  }, 6000)
}

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chon-sarak-b9922836a',
    label: 'chon-sarak',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Sarak_chon',
    label: '@Sarak_chon',
    icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  }
]
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Header -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium tracking-wide mb-3">
          <span>// GET IN TOUCH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Let's Build Something Great
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Open for full-time engineering opportunities, contract roles, and technical collaborations.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">

        <!-- Left: Direct Channels & Information (5 cols) -->
        <div v-reveal="{ delay: 100 }" class="lg:col-span-5 space-y-4">

          <!-- Email Card with Copy-to-Clipboard -->
          <div class="rounded-2xl p-5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-md hover:border-slate-700 transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                DIRECT EMAIL
              </span>
              <button
                @click="copyEmail"
                type="button"
                class="px-2 py-0.5 rounded text-[11px] font-mono transition-colors"
                :class="emailCopied ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'"
              >
                {{ emailCopied ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <a
              href="mailto:sarakchon11@gmail.com"
              class="text-base sm:text-lg font-bold text-white hover:text-amber-300 transition-colors block"
            >
              sarakchon11@gmail.com
            </a>
            <p class="text-xs text-slate-500 mt-1">Usually replies within 24 hours</p>
          </div>

          <!-- Telegram Direct Card -->
          <div class="rounded-2xl p-5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-md hover:border-slate-700 transition-all duration-300">
            <span class="text-xs font-mono text-slate-400 flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-sky-400"></span>
              PHONE / TELEGRAM
            </span>
            <a
              href="https://t.me/Sarak_chon"
              target="_blank"
              rel="noopener noreferrer"
              class="text-base sm:text-lg font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-2"
            >
              <span>+855 97 387 0816</span>
              <span class="text-xs font-mono text-sky-400 font-normal">(@Sarak_chon)</span>
            </a>
            <p class="text-xs text-slate-500 mt-1">Fastest channel for immediate discussions</p>
          </div>

          <!-- Location & Timezone Card -->
          <div class="rounded-2xl p-5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-md">
            <span class="text-xs font-mono text-slate-400 flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              LOCATION & TIMEZONE
            </span>
            <div class="text-base font-bold text-white">
              Phnom Penh, Cambodia
            </div>
            <p class="text-xs text-slate-500 font-mono mt-1">Indochina Time (ICT) • GMT+7</p>
          </div>

          <!-- Social Links Strip -->
          <div class="pt-2 flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 py-3 px-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white shadow-xs transition-all flex items-center justify-center gap-2 text-xs font-medium"
            >
              <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
              <span>{{ social.name }}</span>
            </a>
          </div>

        </div>

        <!-- Right: Modern Formspree Form (7 cols) -->
        <div v-reveal="{ delay: 200 }" class="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/20">
          <h3 class="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
          <p class="text-xs text-slate-400 mb-6">Fill in the fields below and I'll receive it instantly.</p>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-xs font-mono text-slate-400 mb-1.5">YOUR NAME</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:bg-slate-950 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all text-sm font-sans"
                placeholder="e.g. Alex Morgan"
              />
            </div>

            <div>
              <label for="email" class="block text-xs font-mono text-slate-400 mb-1.5">YOUR EMAIL</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:bg-slate-950 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all text-sm font-sans"
                placeholder="alex@company.com"
              />
            </div>

            <div>
              <label for="message" class="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:bg-slate-950 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all text-sm font-sans resize-none"
                placeholder="Tell me about your project, timeline, and requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-60 text-slate-950 font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-md shadow-amber-500/15 active:scale-[0.99]"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isSubmitting ? 'Sending Message...' : 'Send Message' }}</span>
              <svg v-if="!isSubmitting" class="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <!-- Success Notification -->
            <div
              v-if="submitStatus === 'success'"
              class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-xs font-medium flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Thank you! Your message has been sent successfully. I will respond promptly.</span>
            </div>

            <!-- Error Notification -->
            <div
              v-if="submitStatus === 'error'"
              class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-xs font-medium flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span>Failed to send. Please try again or reach out directly at sarakchon11@gmail.com</span>
            </div>
          </form>
        </div>

      </div>

    </div>
  </section>
</template>
