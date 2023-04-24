<template>
  <section class="section-instagram" v-editable="blok">
    <div class="container">
      <h2 v-if="blok.headline" v-motion-up class="up">{{ blok.headline }}</h2>
      <Swiper
        v-motion-up
        :slides-per-view="'auto'"
        :space-between="35"
        :class="blok.headline.length === 0 ? '' : 'mt-medium'"
        class="instagram__photos"
      >
        <SwiperSlide v-for="item in blok.cards" :key="item">
          <NuxtLink
            to="https://www.instagram.com/byvolk/"
            target="_blank"
            class="instagram__photos-item up"
          >
            <div class="instagram__photos-item-head">
              <div class="instagram__photos-item-info">
                <div class="instagram__photos-item-avatar">
                  <NuxtImg
                    provider="storyblok"
                    :src="item.avatar.filename"
                    v-if="item.avatar.filename"
                    width="30"
                    height="30"
                    alt="Instagram avatar"
                    v-lazy-load
                  ></NuxtImg>
                </div>
                <div class="instagram__photos-item-user">
                  <div v-if="item.name">{{ item.name }}</div>
                  <div v-if="item.nickname">{{ item.nickname }}</div>
                </div>
              </div>
              <IconsMore class="instagram__photos-item-head-icon"></IconsMore>
            </div>
            <div class="instagram__photos-item-img-wrapper">
              <NuxtPicture
                :src="item?.image.filename"
                v-if="item?.image"
                provider="storyblok"
                alt="Instagram picture"
                sizes="sm:100vw md:100vw"
                width="325"
                v-lazy-load
              ></NuxtPicture>
            </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" src="assets/scss/components/_instagramBlock.scss"></style>
