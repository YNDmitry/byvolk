<template>
  <div class="product-input">
    <button
      type="button"
      class="product-input__button"
      :disabled="isDisabled"
      @click="!isDisabled ? emit('decrement') : ''"
    >
      -
    </button>
    <div>{{ props.value }}</div>
    <button type="button" class="product-input__button" @click="emit('increment')">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['increment', 'decrement'])

const isDisabled = computed(() => !(props.value > 1))
</script>
