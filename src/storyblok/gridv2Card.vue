<template>
  <div class="gridv2-card">
    <ClientOnly>
      <h2 v-if="heading && useIsMobile" v-motion-up>
        <strong>{{ heading }}</strong>
      </h2>
    </ClientOnly>
    <NuxtPicture
      v-if="img"
      v-lazy-load
      v-motion-fade
      :src="img.filename"
      provider="storyblok"
      sizes="md:100vw"
      width="720"
      quality="80"
    ></NuxtPicture>
    <div class="gridv2-card__rich-wrapper">
      <ClientOnly>
        <h2 v-if="heading && !useIsMobile" v-motion-up>
          <strong>{{ heading }}</strong>
        </h2>
      </ClientOnly>
      <div v-if="description" v-html="richtext" v-motion-up class="gridv2-card__rich"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: Object
  },
  heading: {
    type: String
  },
  description: {
    type: Object
  }
})

const richtext = asyncComputed(() => renderRichText(props.description))
</script>

<style lang="scss" src="assets/scss/components/_gridv2Card.scss"></style>
