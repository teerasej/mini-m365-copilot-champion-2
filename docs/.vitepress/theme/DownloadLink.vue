<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ href: string }>()
</script>

<template><a :href="withBase(href)" download><slot /></a></template>
