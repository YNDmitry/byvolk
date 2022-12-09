<template>
  <div class="gallery__item">
    <img :src=img alt="">
  </div>
</template>

<script setup>
  const props = defineProps({
    img: {
      type: String,
      required: true
    }
  })
</script> 