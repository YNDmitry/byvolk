<template>
  <Transition name="fade">
    <div class="preloader" v-if="isVisible">
      <IconsLogo width="350" height="350" :color="'#ffffff'"></IconsLogo>
    </div>
  </Transition>
</template>

<script setup>
  const isVisible = ref(true)
  
  useNuxtApp().hook('page:finish', () => {
    setTimeout(() => isVisible.value = false, 200)
  })
</script>

<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: 10000000;
}
</style>