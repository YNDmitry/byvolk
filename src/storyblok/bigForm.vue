<template>
  <ClientOnly>
    <section v-editable="blok" class="section-big-form">
      <div class="container">
        <div class="section-big-form__wrapper">
          <div class="section-big-form__head">
            <h2 v-if="blok.headline" v-motion-up>{{ blok.headline }}</h2>
            <div v-if="richtext" v-motion-up v-html="richtext" class="mt-medium"></div>
          </div>
          <div>
            <form class="big-form" @submit.prevent="submitHandler()" v-if="!isSuccess">
              <div class="big-form__inputs">
                <FormDefaultInput
                  v-motion-up
                  :title="input.placeholder"
                  :name="input.name"
                  :type="input.type"
                  v-for="input in dataInputs"
                  :key="input._uid"
                  :class="{ 'is-full': input.fullWidth }"
                  :inputType="input.textArea ? 'textarea' : 'input'"
                  v-model:inputValue.trim="input.value"
                  :isPending="isPending"
                ></FormDefaultInput>
              </div>
              <div class="w-full text-center" v-motion-up>
                <VueRecaptcha
                  ref="recaptcha"
                  :sitekey="config.recaptchaKey"
                  class="text-center"
                  @verify="captchaVerify()"
                  @expired="captchaExpired()"
                  @error="captchaError()"
                ></VueRecaptcha>
                <div class="input__error-message" v-if="!isCaptchaVerify">Required</div>
                <button v-motion-up type="submit" class="button-primary mt-small">
                  {{ isPending ? 'Loading...' : 'Submit' }}
                </button>
              </div>
            </form>
            <div v-else-if="isSuccess && !isError" class="text-center">
              Form submission is success
            </div>
            <div v-if="!isSuccess && isError" style="color: red" class="mt-small">
              Something went wrong. Try again later
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
import { useForm } from 'vee-validate'

const props = defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const config = useRuntimeConfig()

const dataInputs = ref(
  props.blok.inputs.map((el) => ({
    ...el,
    value: ''
  }))
)

const isPending = ref(false)
const isSuccess = ref(false)
const isError = ref(false)
const isCaptchaVerify = ref(false)
const recaptcha = ref('')
const { validate } = useForm()

const captchaVerify = () => {
  return (isCaptchaVerify.value = true)
}

const captchaExpired = () => {
  return (isCaptchaVerify.value = false)
}

const captchaError = () => {
  return (isCaptchaVerify.value = false)
}

const submitHandler = async () => {
  const { valid } = await validate()

  if (valid && isCaptchaVerify.value) {
    isPending.value = true
    let model = ''
    dataInputs.value.forEach((el) => {
      return (model += `<strong>${el.placeholder}: </strong>` + el.value + '<br>')
    })

    try {
      await $fetch('/api/email', {
        method: 'POST',
        body: {
          subject: 'Form',
          html: model
        }
      })
      return (isSuccess.value = true)
    } catch (error) {
      isPending.value = false
      return (isError.value = true)
    }
  }
}

const richtext = computed(() => renderRichText(props.blok.description))
</script>

<style lang="scss" src="assets/scss/components/_bigForm.scss"></style>
