<template>
  <video
    v-motion-fade
    v-lazy-load
    playsinline
    loop="loop"
    autoplay="autoplay"
    muted="muted"
    preload="metadata"
  >
    <source :src="videoSrc" type="video/mp4" />
  </video>
</template>

<script setup>
defineProps({
  videoSrc: {
    type: String
  }
})
</script>
