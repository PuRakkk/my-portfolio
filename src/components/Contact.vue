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
      // Reset form and show success
      form.value = { name: '', email: '', message: '' }
      submitStatus.value = 'success'
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    submitStatus.value = 'error'
  }

  isSubmitting.value = false

  // Reset status after 5 seconds
  setTimeout(() => {
    submitStatus.value = 'idle'
  }, 5000)
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/PuRakkk',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chon-sarak-b9922836a',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Sarak_chon',
    icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  }
]
</script>

<template>
  <section id="contact" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Dark Red & Gold Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-950/30 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-pulse"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold text-white mb-6">Let's talk about your project</h3>
          <p class="text-gray-400 mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-center text-gray-300">
              <div class="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="text-white">sarakchon11@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center text-gray-300">
              <div class="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Location</p>
                <p class="text-white">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          <div class="flex space-x-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              class="w-11 h-11 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-dark-600 border border-dark-600 hover:border-gold-400/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-8 py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-dark-900 font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
          >
            <svg
              v-if="isSubmitting"
              class="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div
            v-if="submitStatus === 'success'"
            class="p-4 bg-gold-400/10 border border-gold-400/20 rounded-lg text-gold-400 text-center"
          >
            Message sent successfully! I'll get back to you soon.
          </div>

          <div
            v-if="submitStatus === 'error'"
            class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
          >
            Something went wrong. Please try again or contact me directly via email.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
