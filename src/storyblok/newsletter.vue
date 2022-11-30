<template>
  <div class="container">
    <FormNewsletter :title="blok.title" class="up" v-editable="blok"></FormNewsletter>
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