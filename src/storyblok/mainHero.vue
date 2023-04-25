<template>
  <section v-editable="blok" class="section-hero">
    <div class="container-md up">
      <h1 v-motion-up>{{ blok.headline }}</h1>
      <div
        v-if="props.blok.description.content.length > 0"
        v-motion-up
        class="mt-small"
        v-html="richtext"
      ></div>
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

const richtext = asyncComputed(() => renderRichText(props.blok.description))
</script>

<style lang="scss" src="../assets/scss/components/_mainHero.scss"></style>
