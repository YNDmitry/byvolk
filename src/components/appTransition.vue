<template>
  <Transition name="fade">
    <div class="preloader" v-if="isActive">
      <IconsLogo :color="'#ffffff'" :width="350" :height="350"></IconsLogo>
    </div>
  </Transition>
</template>

<script setup>
  const isActive = ref(false)

  useNuxtApp().hook('page:start', () => {
    isActive.value = true
  })

  useNuxtApp().hook('page:finish', () => {
    setTimeout(() => {
      isActive.value = false
      window.scrollTo(0, 0);
    }, 100)
  })
</script>
