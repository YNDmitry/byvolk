<template>
  <form class="form-newsletter" @submit.prevent="handleSubmit()">
    <h6 v-if="title" v-motion-up>{{ title }}</h6>
    <template v-if="!isSuccess">
      <div v-motion-up :class="['form-newsletter__input-wrapper', { 'is-white': isWhite }]">
        <FormDefaultInput
          v-model:inputValue="email"
          :title="'Email address'"
          :name="'Email'"
          :type="'email'"
          :is-pending="isPending"
        ></FormDefaultInput>
        <button type="submit" class="button-primary">
          {{ isPending ? 'Loading...' : 'Subscribe' }}
        </button>
      </div>
    </template>
    <div v-else-if="isSuccess && !isError">Form submission is success</div>
    <div v-if="!isSuccess && isError" style="color: red" class="mt-small">
      Something went wrong. Try again later
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate'

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  isWhite: {
    type: Boolean,
    required: false,
    default: false
  }
})

const isPending = ref(false)
const isSuccess = ref(false)
const isError = ref(false)
const email = ref('')
const { validate } = useForm()

const handleSubmit = async () => {
  const { valid } = await validate()
  if (valid) {
    isPending.value = true
    try {
      await $fetch('/api/email', {
        method: 'POST',
        body: {
          subject: 'Newsletter Form',
          html: `<strong>Email: </strong>${email.value}`
        }
      })
      return (isSuccess.value = true)
    } catch (error) {
      isPending.value = false
      return (isError.value = true)
    }
  }
}
</script>

<style lang="scss" src="assets/scss/components/_formNewsletter.scss"></style>
