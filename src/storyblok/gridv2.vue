<template>
  <section v-editable="blok" class="section-grid-v2">
    <div class="container">
      <div :class="{ 'mt-large': blok.headline }" class="grid-v2">
        <Gridv2Card
          v-for="(card, idx) in blok.cards"
          :key="card"
          :img="card.image"
          :description="card.body"
          :heading="card.heading"
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
        ></Gridv2Card>
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
