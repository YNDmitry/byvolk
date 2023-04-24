<template>
  <div class="dropdown" @click="open()" ref="target">
    <div class="dropdown__toggle">
      <slot name="head"></slot>
      <IconsPluse :class="{ 'is-active': isOpen }"></IconsPluse>
    </div>
    <Transition name="dropdown">
      <div class="dropdown__list" v-show="isOpen">
        <slot name="body" class="dropdown__list-content"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const target = ref(null)
const isOpen = ref(false)

function open() {
  if (!isOpen.value) {
    return (isOpen.value = true)
  }
  return (isOpen.value = false)
}
</script>

<style lang="scss" src="assets/scss/components/_dropdown.scss"></style>
