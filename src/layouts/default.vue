<template>
  <div class="default-layout">
    <NuxtLoadingIndicator class="nuxt-loading-indicator" />
    <DefaultHeader></DefaultHeader>
    <slot></slot>
    <DefaultFooter></DefaultFooter>
    <PopupCart></PopupCart>
  </div>
</template>

<script setup>
useNuxtApp().hook('page:transition:finish', () => {
  window.scrollTo(0, 0)
})
</script>
