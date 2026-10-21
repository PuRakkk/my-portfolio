<script setup lang="ts">
defineProps<{
  index: string
  label: string
  title?: string
  description?: string
}>()
</script>

<template>
  <div v-reveal class="grid md:grid-cols-12 gap-4 md:gap-8 mb-8 md:mb-16">
    <div class="md:col-span-3">
      <span class="eyebrow !text-fg">{{ index }} / {{ label }}</span>
    </div>
    <div class="md:col-span-9">
      <h2 v-if="title" class="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-fg text-balance">
        {{ title }}
      </h2>
      <p v-if="description" class="mt-3 sm:mt-4 text-muted text-sm sm:text-lg leading-relaxed max-w-2xl">
        {{ description }}
      </p>
    </div>
  </div>
</template>
