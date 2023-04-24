<template>
  <div class="container">
    <ClientOnly>
      <FormNewsletter :title="blok.title" v-editable="blok"></FormNewsletter>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => {}
  }
})
</script>
