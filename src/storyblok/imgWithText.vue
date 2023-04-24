<template>
  <section class="section-iwt" v-editable="blok">
    <div class="container">
      <div class="iwt__items">
        <NuxtPicture
          v-motion-fade
          v-lazy-load
          :src="blok.image.filename"
          :style="{ order: blok.imageOrder }"
          :img-attrs="{
            style: { 'max-width': blok.imageWidth + 'px' }
          }"
          :width="blok.imageWidth"
          provider="storyblok"
          class="iwt__img"
          loading="lazy"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
          alt="BYVOLK"
        ></NuxtPicture>
        <div v-motion-up class="iwt__info">
          <div v-html="richtext" class="iwt__info-rich"></div>
          <NuxtLink
            :to="button.link.cached_url"
            v-for="button in blok.button"
            :key="button"
            :class="[`button-${button.buttonType}`, 'mt-medium']"
          >
            {{ button.title }}
          </NuxtLink>
        </div>
      </div>
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

const richtext = computed(() => renderRichText(props.blok.description))
</script>

<style lang="scss" src="assets/scss/components/_imgWithText.scss"></style>
