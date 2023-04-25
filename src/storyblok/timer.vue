<template>
  <section v-editable="blok" class="section-timer">
    <div class="container">
      <div class="grid-2-col">
        <div class="timer__head">
          <h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
          <div v-if="richtext" class="mt-small up" v-html="richtext"></div>
        </div>
        <div v-if="isActive" class="timer__body">
          <div class="timer__bl">
            <div v-for="(item, idx) in timer" :key="idx" class="timer__card up">
              <span class="timer__card-time">{{ item }}</span>
              <span class="timer__card-title">{{ idx }}</span>
            </div>
          </div>
          <FormNewsletter :is-white="true" class="up"></FormNewsletter>
        </div>
        <div v-else class="timer__success">
          <h4 class="m-auto up">Already dropped!</h4>
          <template v-if="blok.successButton">
            <div class="mt-medium w-full up">
              <NuxtLink
                v-for="button in blok.successButton"
                :key="button"
                :to="button.link.cached_url"
                :class="[`button-${button.buttonType}`, 'w-full']"
              >
                {{ button.title }}
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const richtext = computed(() => renderRichText(props.blok.description))
const isActive = asyncComputed(() => !(new Date(props.blok.date) <= new Date()))
let endTime = new Date(props.blok.date)

const timer = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

onMounted(() => {
  const init = () => {
    endTime = Date.parse(endTime) / 1000

    let now = new Date()
    now = Date.parse(now) / 1000

    if (endTime <= now) {
      isActive.value = false
      return clearInterval(interval)
    }

    const timeLeft = endTime - now

    const days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60)

    if (hours < '10') {
      hours = '0' + hours
    }
    if (minutes < '10') {
      minutes = '0' + minutes
    }
    if (seconds < '10') {
      seconds = '0' + seconds
    }

    timer.days = days
    timer.hours = hours
    timer.minutes = minutes
    timer.seconds = seconds
  }
  const interval = setInterval(() => {
    init()
  }, 1000)
})
</script>

<style lang="scss" src="assets/scss/components/_timer.scss"></style>
