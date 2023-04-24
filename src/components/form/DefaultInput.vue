<template>
  <div class="input__wrapper">
    <label class="input">
      <span :class="{ 'is-active': isInputValue }">{{ props.title }}</span>
      <component
        :is="props.inputType"
        :type="props.type"
        :name="props.name"
        :value="props.inputValue"
        @input="$emit('update:inputValue', $event.target.value)"
        @change="value = props.inputValue"
        :disabled="isPending ? true : false"
      ></component>
    </label>
    <div class="input__error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'
import { toFieldValidator } from '@vee-validate/zod'
import * as zod from 'zod'

const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  name: {
    type: String,
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'text',
    required: true
  },
  inputType: {
    type: String,
    default: 'input',
    required: false,
    validator: (value) => {
      return ['input', 'textarea'].includes(value)
    }
  },
  isTextArea: {
    type: Boolean,
    default: false,
    required: false
  },
  inputValue: {
    type: String
  },
  isPending: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:inputValue'])

let isActive = ref(false)

const fieldSchema = toFieldValidator(
  props.type === 'email'
    ? zod.string().nonempty(`${props.title} is required`).email('Must be a valid email')
    : zod.string().nonempty(`${props.title} is required`)
)
let { value, errorMessage } = useField(props.name, fieldSchema)

const isInputValue = computed(() => {
  return (isActive.value = props.inputValue?.length > 0 ? true : false)
})
</script>
