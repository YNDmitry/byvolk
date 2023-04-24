<template>
  <section v-editable="blok" class="section-grid">
    <div class="container">
      <div class="cards-grid">
        <GridCard
          v-for="(card, idx) in blok.cards"
          :key="card"
          :content="card"
          v-motion="{
            initial: {
              y: 70,
              opacity: 0
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1000,
                delay: 200 * idx
              }
            }
          }"
        ></GridCard>
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

<style lang="scss" src="assets/scss/components/_grid.scss"></style>
