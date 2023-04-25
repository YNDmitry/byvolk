<template>
  <section v-editable="blok" class="section-icons">
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
              v-lazy-load
              :src="card.image.filename"
              :alt="card.headline"
              class="icons__card-icon-img"
              provider="storyblok"
            ></NuxtPicture>
          </div>
          <h5 v-if="card.headline" class="fw-600">{{ card.headline }}</h5>
          <p v-if="card.description" class="p-18 mt-small">
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
