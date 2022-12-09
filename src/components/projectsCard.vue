<template>
  <div class="projects__card">
    <div class="projects__card-info up" v-html="body"></div>
    <Swiper class="projects__card-slider up" :modules="[SwiperAutoplay]" :autoHeight="true" :loop="true" :autoplay="{delay: 3000}">
      <SwiperSlide v-for="img in images" :key="img">
        <NuxtImg provider="storyblok" :src="img.filename" width="500" quality="50"></NuxtImg>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
  const props = defineProps({
    images: {
      type: Array
    },
    body: {
      type: String
    }
  })
</script>