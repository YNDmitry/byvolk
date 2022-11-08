<template>
  <Transition name="fade">
    <div class="preloader" v-if="isVisible">
      <IconsLogo :width="350" :height="350" :color="'#ffffff'"></IconsLogo>
    </div>
  </Transition>
</template>

<script setup>
  const isVisible = ref(true)
  
  useNuxtApp().hook('page:finish', () => {
    setTimeout(() => isVisible.value = false, 50)
  })
</script>
