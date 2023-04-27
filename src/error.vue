<template>
  <div>
    <NuxtLayout>
      <div class="error text-center">
        <h1 v-motion-up class="error__h">{{ error.statusCode }}</h1>
        <p v-motion-up>{{ error.statusMessage }}</p>
        <button v-motion-up class="button-primary" @click="handleError()">
          Go to the home page
        </button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => {}
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
