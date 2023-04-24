<template>
  <section class="section-icons" v-editable="blok">
    <div class="container">
      <div
        class="icons__grid"
        :style="`grid-template-columns: repeat(${columnCount}, 1fr);`"
        :data-columns="columnCount"
      >
        <div v-for="(card, idx) in blok.cards" :key="idx" v-motion-up class="icons__card">
          <div class="icons__card-icon">
            <NuxtPicture
              v-if="card.image"
              :src="card.image.filename"
              :alt="card.headline"
              class="icons__card-icon-img"
              provider="storyblok"
              v-lazy-load
            ></NuxtPicture>
          </div>
          <h5 class="fw-600" v-if="card.headline">{{ card.headline }}</h5>
          <p class="p-18 mt-small" v-if="card.description">
            {{ card.description }}
          </p>
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

const columnCount = computedAsync(() => props.blok.columnCount)
</script>

<style lang="scss" src="assets/scss/components/_iconsCards.scss"></style>
