<template>
	<label class="input">
		<span :class="isInputValue ? 'is-active' : ''">{{ props.title }}</span>
		<textarea
			:name="props.name"
			v-if="isTextArea"
			v-model.trim="inputValue.value"
			@focus="isActive = true"
			@focusout="isActive = false"
			required
		></textarea>
		<input
			v-else
			:type="props.type"
			:name="props.name"
			v-model.trim="inputValue.value"
			@focus="isActive = true"
			@focusout="isActive = false"
			@focusin="isActive = true"
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
	})

	let isActive = ref(false)
	const inputValue = reactive({ value: '' })

	const isInputValue = computed(() => {
		return inputValue.value.length > 0 ? (isActive = true) : (isActive = false)
	})
</script>
