<template>
  <section class="section-hero-main" v-editable="blok">
    <div class="container">
      <div class="hero-main__content">
        <div v-motion-up class="hero-main__info">
          <h1 v-if="blok.headline" class="h-bebas">{{ blok.headline }}</h1>
          <div class="hero-main__body">
            <p v-if="blok.description" class="hero-main__p">
              {{ blok.description }}
            </p>
            <div class="hero-main__footer">
              <div class="hero-main__info-buttons">
                <template v-if="blok.buttons.length > 0">
                  <NuxtLink
                    :class="`button-${button.buttonType}`"
                    v-for="button in blok.buttons"
                    :key="button"
                    :to="button.link.cached_url"
                  >
                    {{ button.title }}
                    <NuxtImg
                      v-if="button?.image"
                      :src="button.image.filename"
                      width="172"
                    ></NuxtImg>
                  </NuxtLink>
                </template>
              </div>
            </div>
          </div>
        </div>
        <NuxtPicture
          v-if="blok?.image && blok?.isVideo === false"
          v-lazy-load
          v-motion-fade
          :src="blok?.image?.filename"
          :alt="blok?.image?.alt || 'Byvolk main image'"
          provider="storyblok"
          class="hero-main__img"
          width="650"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        ></NuxtPicture>
        <video
          v-else
          v-motion-fade
          v-lazy-load
          playsinline
          loop="loop"
          autoplay="autoplay"
          muted="muted"
          preload="metadata"
          width="650"
          class="hero-main__video"
        >
          <source :src="blok?.image?.filename" type="video/mp4" />
        </video>
      </div>
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

<style lang="scss" src="../assets/scss/components/_mainHeroWithImage.scss"></style>
