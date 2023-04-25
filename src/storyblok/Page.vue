<template>
  <StoryblokComponent v-for="item in blok?.body" :key="item._uid" :blok="item" />
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>
