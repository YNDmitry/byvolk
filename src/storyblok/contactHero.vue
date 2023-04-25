<template>
  <section v-editable="blok" class="contact-hero">
    <div class="contact-hero__container">
      <div class="contact-hero__social">
        <NuxtLink v-motion-up class="contact-hero__link" to="mailto:info@byvolk.com">
          <div>info@byvolk.com</div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" src="assets/scss/components/_contactHero.scss"></style>
