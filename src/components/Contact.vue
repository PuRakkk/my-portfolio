<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'

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
  <section id="contact" class="py-14 sm:py-20 border-t border-line">
    <div class="container-page">
      <SectionHeading
        index="05"
        label="Contact"
      />

      <div class="grid md:grid-cols-12 gap-12 md:gap-8">
        <!-- Direct Channels -->
        <div v-reveal="{ delay: 80 }" class="md:col-span-5 md:col-start-4 lg:col-span-4">
          <dl class="space-y-8">
            <div>
              <dt class="eyebrow">Email</dt>
              <dd class="mt-2 flex flex-wrap items-center gap-3">
                <a href="mailto:sarakchon11@gmail.com" class="text-base sm:text-lg font-medium text-fg link-underline">
                  sarakchon11@gmail.com
                </a>
                <button
                  @click="copyEmail"
                  type="button"
                  class="px-2 py-0.5 rounded border border-line text-xs font-mono text-muted hover:text-fg hover:border-subtle transition-colors"
                >
                  {{ emailCopied ? 'Copied' : 'Copy' }}
                </button>
              </dd>
              <p class="mt-1 text-sm text-subtle">Usually replies within 24 hours</p>
            </div>

            <div>
              <dt class="eyebrow">Phone / Telegram</dt>
              <dd class="mt-2">
                <a href="https://t.me/Sarak_chon" target="_blank" rel="noopener noreferrer" class="text-base sm:text-lg font-medium text-fg link-underline">
                  +855 97 387 0816
                </a>
                <span class="ml-2 font-mono text-xs text-subtle">@Sarak_chon</span>
              </dd>
              <p class="mt-1 text-sm text-subtle">Fastest channel for quick discussions</p>
            </div>

            <div>
              <dt class="eyebrow">Location</dt>
              <dd class="mt-2 text-base sm:text-lg font-medium text-fg">Phnom Penh, Cambodia</dd>
              <p class="mt-1 text-sm text-subtle font-mono">ICT · GMT+7</p>
            </div>

            <div>
              <dt class="eyebrow">Elsewhere</dt>
              <dd class="mt-3 flex items-center gap-2">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  :title="social.name"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-secondary !px-3 !py-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="social.icon" />
                  </svg>
                  {{ social.name }}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Form -->
        <div v-reveal="{ delay: 160 }" class="md:col-span-4 lg:col-span-5">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-fg mb-1.5">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                class="form-field"
                placeholder="Alex Morgan"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-fg mb-1.5">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                class="form-field"
                placeholder="alex@company.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-fg mb-1.5">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="form-field resize-none"
                placeholder="Tell me about your project, timeline, and requirements..."
              ></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="btn-primary w-full justify-center disabled:opacity-60">
              <svg v-if="isSubmitting" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send message' }}
            </button>

            <p
              v-if="submitStatus === 'success'"
              role="status"
              class="px-4 py-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-700 dark:text-emerald-300"
            >
              Thanks! Your message has been sent. I'll get back to you soon.
            </p>
            <p
              v-if="submitStatus === 'error'"
              role="alert"
              class="px-4 py-3 rounded-md border border-red-500/30 bg-red-500/10 text-sm text-red-700 dark:text-red-300"
            >
              Failed to send. Please try again or email sarakchon11@gmail.com directly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
