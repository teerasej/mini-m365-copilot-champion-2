<script setup lang="ts">
import { withBase } from 'vitepress'
import hero from './course-hero.json'
</script>

<template>
  <section class="course-hero" aria-label="เริ่มเรียนและดาวน์โหลดไฟล์ฝึก">
    <img
      :src="withBase(hero.src)"
      :srcset="hero.srcset.map(image => `${withBase(image.src)} ${image.width}w`).join(', ')"
      sizes="(min-width: 1280px) 688px, (min-width: 960px) calc(100vw - 336px), (min-width: 768px) calc(100vw - 128px), calc(100vw - 48px)"
      :width="hero.width"
      :height="hero.height"
      :alt="hero.alt"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />
    <div class="course-hero-actions">
      <a class="course-action course-action-primary" :href="withBase('/exercises/day-1/01-discover-work-friction.html')">เริ่มแบบฝึกหัด</a>
      <a class="course-action course-action-secondary" :href="withBase('/downloads/all-practice-files.zip')" download>ดาวน์โหลดไฟล์ตัวอย่างทั้งหมด</a>
    </div>
    <p class="course-hero-hint">รวมไฟล์ Day 1, Day 2 และ Skill starter — แตก ZIP ก่อนเริ่ม</p>
  </section>
</template>
