<template>
  <div v-editable="blok" class="big-link">
    <div class="container">
      <div v-motion-up class="text-center">
        <NuxtLink :to="blok.link.cached_url" class="m-auto">{{ blok.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>
