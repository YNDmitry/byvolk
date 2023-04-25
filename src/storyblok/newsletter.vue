<template>
  <div class="container">
    <ClientOnly>
      <FormNewsletter v-editable="blok" :title="blok.title"></FormNewsletter>
    </ClientOnly>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => {}
  }
})
</script>
