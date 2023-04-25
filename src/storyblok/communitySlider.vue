<template>
  <section id="community" v-editable="blok" class="slider">
    <div class="container">
      <div class="slider__head">
        <button
          id="community-prev"
          ref="leftArr"
          v-motion-up
          type="button"
          aria-label="Community slider arrow prev"
          class="slider__nav-button is-prev"
        >
          <IconsArrowRight></IconsArrowRight>
        </button>
        <h2 v-if="blok.headline" v-motion-up class="up">{{ blok.headline }}</h2>
        <button
          id="community-next"
          ref="rightArr"
          v-motion-up
          type="button"
          aria-label="Community slider arrow next"
          class="slider__nav-button is-next"
        >
          <IconsArrowRight></IconsArrowRight>
        </button>
      </div>
      <Swiper
        v-motion-up
        :modules="[SwiperNavigation]"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="35"
        :loop="true"
        :navigation="{
          nextEl: rightArr,
          prevEl: leftArr
        }"
        :grab-cursor="true"
        class="slider__slider mt-medium"
      >
        <SwiperSlide
          v-for="slide in blok.communitySlides"
          :key="slide._uid"
          class="slider__slider-slide"
        >
          <CommunitySlide :content="slide"></CommunitySlide>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const leftArr = ref(null)
const rightArr = ref(null)
</script>

<style lang="scss" src="assets/scss/components/_communitySlider.scss"></style>
