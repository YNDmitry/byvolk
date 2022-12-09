<template>
  <div v-editable="blok" class="gallery">
    <div class="container">
      <div class="gallery__wrapper">
        <GalleryItem :img="blok.img"></GalleryItem>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>