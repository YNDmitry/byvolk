<template>
  <section v-editable="blok" class="rich">
    <div class="container">
      <div class="rich__body" v-html="richtext"></div>
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

const richtext = asyncComputed(() => renderRichText(props.blok.body))
</script>

<style lang="scss" src="assets/scss/components/_rich.scss"></style>
