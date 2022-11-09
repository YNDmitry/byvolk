<template>
  <Transition name="fade-page">
    <div class="preloader" v-if="isActive">
      <IconsLogo :width="350" :height="350" :color="'#ffffff'"></IconsLogo>
    </div>
  </Transition>
</template>

<script setup>
  const isActive = ref(true)

  useNuxtApp().hook('page:start', () => {
    isActive.value = true
    window.scrollTo(0, 0);
  })

  useNuxtApp().hook('page:finish', () => {
    setTimeout(() => {
      isActive.value = false
    }, 400)
  })
</script>

<style lang="scss">
@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
.preloader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background-color: black;
  z-index: 10000000;

  & svg {
    -webkit-animation: flickerAnimation 1s infinite;
    -moz-animation: flickerAnimation 1s infinite;
    -o-animation: flickerAnimation 1s infinite;
    animation: flickerAnimation 1s infinite;
  }
}

.fade-page-leave-active {
  transition: all 200ms ease-in-out;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}

.fade-page-enter-to,
.fade-page-leave-from {
  opacity: 1;
}
</style>