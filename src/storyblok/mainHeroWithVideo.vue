<template>
  <section v-editable="blok" class="section-hero-main section-hero-main--video">
    <Video
      v-if="blok.video?.filename"
      v-motion-fade
      :video-src="blok.video.filename"
      class="section-hero-main__bg-video"
    />
    <div class="container text-center">
      <div v-motion-up class="hero-main__info-600">
        <h1 v-if="blok.headline" class="h-bebas">{{ blok.headline }}</h1>
        <div v-if="blok.body" class="hero-main__body" v-html="richtext"></div>
        <div class="hero-main__footer">
          <div class="hero-main__info-buttons">
            <template v-if="blok.buttons.length > 0">
              <NuxtLink
                v-for="button in blok.buttons"
                :key="button"
                :class="`button-${button.buttonType}`"
                :to="button.link.cached_url"
              >
                {{ button.title }}
                <NuxtImg
                  v-if="button.image?.filename"
                  v-lazy-load
                  :src="button.image.filename"
                  width="172"
                ></NuxtImg>
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => {}
  }
})

const richtext = computed(() => renderRichText(props.blok.body))
</script>

<style lang="scss" src="../assets/scss/components/_mainHeroWithImage.scss"></style>
