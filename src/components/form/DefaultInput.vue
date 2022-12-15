<template>
	<label class="input">
		<span :class="isInputValue ? 'is-active' : ''">{{ props.title }}</span>
		<textarea
			:name="props.name"
			v-if="isTextArea"
			:value="props.inputValue"
			@input="$emit('update:inputValue', $event.target.value)"
			@focus="isActive = true"
			@focusout="isActive = false"
			@focusin="isActive = true"
			:disabled="isPending ? true : false"
			required
		></textarea>
		<input
			v-else
			:type="props.type"
			:name="props.name"
			:value="props.inputValue"
			@input="$emit('update:inputValue', $event.target.value)"
			@focus="isActive = true"
			@focusout="isActive = false"
			@focusin="isActive = true"
			:disabled="isPending ? true : false"
			required
		/>
	</label>
</template>

<script setup>
	const props = defineProps({
		title: {
			type: String,
			default: '',
			required: true,
		},
		name: {
			type: String,
			default: '',
			required: true,
		},
		type: {
			type: String,
			default: 'text',
			required: true,
		},
		isTextArea: {
			type: Boolean,
			default: false,
			required: false,
		},
		inputValue: {
			type: String,
		},
		isPending: {
			type: Boolean,
			default: false,
		},
	})

	defineEmits(['update:inputValue'])

	let isActive = ref(false)

	const isInputValue = computed(() => {
		return props.inputValue?.length > 0 ? (isActive = true) : (isActive = false)
	})
</script>
