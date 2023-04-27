<template>
  <div class="projects__card">
    <div v-motion-up class="projects__card-info" v-html="body"></div>
    <div
      v-motion-up
      class="projects__card-slider-wrapper"
      :style="{
        maxWidth: width + 'px',
        height: height + 'px'
      }"
    >
      <button id="arrow-prev" ref="arrowPrev" type="button" class="slider__nav-button is-prev">
        <IconsArrowRight></IconsArrowRight>
      </button>
      <Swiper
        class="projects__card-slider"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :loop="loop"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :navigation="{
          nextEl: arrowNext,
          prevEl: arrowPrev
        }"
      >
        <SwiperSlide v-for="img in images" :key="img">
          <NuxtPicture
            v-lazy-load
            provider="storyblok"
            :src="img.filename"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
          ></NuxtPicture>
        </SwiperSlide>
      </Swiper>
      <button id="arrow-next" ref="arrowNext" type="button" class="slider__nav-button is-next">
        <IconsArrowRight></IconsArrowRight>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => []
  },
  body: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})

const loop = ref(true)
const arrowNext = ref(null)
const arrowPrev = ref(null)
</script>
