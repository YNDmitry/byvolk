<template>
  <section v-editable="blok" class="gallery">
    <div class="container">
      <div class="gallery__wrapper">
        <GalleryItem :img="img.img.filename" v-for="img in blok.galleryBlocks"></GalleryItem>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => {}
    }
  })
</script>