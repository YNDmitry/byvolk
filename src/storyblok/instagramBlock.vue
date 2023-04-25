<template>
  <section v-editable="blok" class="section-instagram">
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
                    v-if="item.avatar.filename"
                    v-lazy-load
                    provider="storyblok"
                    :src="item.avatar.filename"
                    width="30"
                    height="30"
                    alt="Instagram avatar"
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
                v-if="item?.image"
                v-lazy-load
                :src="item?.image.filename"
                provider="storyblok"
                alt="Instagram picture"
                sizes="sm:100vw md:100vw"
                width="325"
              ></NuxtPicture>
            </div>
          </NuxtLink>
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
</script>

<style lang="scss" src="assets/scss/components/_instagramBlock.scss"></style>
