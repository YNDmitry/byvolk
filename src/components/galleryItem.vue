<template>
  <div v-motion-up class="gallery__item">
    <NuxtPicture
      v-lazy-load
      provider="storyblok"
      :src="img"
      alt="Gallery picture"
      width="500"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
    ></NuxtPicture>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true
  }
})
</script>
