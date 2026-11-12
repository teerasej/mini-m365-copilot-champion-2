<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, onBeforeUnmount } from 'vue'

// The native sidebar stops click bubbling, so capture links before that boundary.
// Clicking its backdrop preserves VitePress's close state and scroll-lock handling.
function closeSidebarAfterLink(event: MouseEvent) {
  const target = event.target as Element | null
  if (target?.closest('.VPSidebar a[href]')) {
    window.setTimeout(() => document.querySelector<HTMLElement>('.VPBackdrop')?.click(), 0)
  }
}
onMounted(() => document.addEventListener('click', closeSidebarAfterLink, true))
onBeforeUnmount(() => document.removeEventListener('click', closeSidebarAfterLink, true))
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <footer class="course-footer">
        <p>All rights reserved by <a href="https://www.nextflow.in.th/">Amaround Co., Ltd.</a></p>
        <p>© 2026 Teerasej Jiraphatchandej. All rights reserved.</p>
        <nav aria-label="ติดต่อผู้สอน">
          <a href="mailto:teerasej@nextflow.in.th">Email me</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.facebook.com/teerasej">Facebook</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.youtube.com/teerasej">YouTube</a>
        </nav>
      </footer>
    </template>
  </DefaultTheme.Layout>
</template>
