<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import images from './practice-images.json'

const props = defineProps<{ id: string; eager?: boolean }>()
type ImageEntry = { src: string; srcset?: string | { src: string; width: number }[]; width: number; height: number; alt: string }
const image = computed(() => (images as Record<string, ImageEntry>)[props.id])
const resolvedSrcset = computed(() => {
  const candidates = image.value?.srcset
  if (Array.isArray(candidates)) return candidates.map(entry => `${withBase(entry.src)} ${entry.width}w`).join(', ')
  return candidates?.split(',').map(entry => {
    const [url, width] = entry.trim().split(/\s+/)
    return `${withBase(url)} ${width}`
  }).join(', ')
})
</script>

<template>
  <figure v-if="image" class="practice-illustration">
    <img
      :src="withBase(image.src)"
      :srcset="resolvedSrcset"
      sizes="(min-width: 1280px) 688px, (min-width: 960px) calc(100vw - 336px), (min-width: 768px) calc(100vw - 128px), calc(100vw - 48px)"
      :width="image.width"
      :height="image.height"
      :alt="image.alt"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
    />
  </figure>
</template>
