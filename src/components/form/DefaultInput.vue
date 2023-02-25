<template>
	<div class="input__wrapper">
		<label class="input">
			<span :class="isInputValue ? 'is-active' : ''">{{ props.title }}</span>
			<VField
				:type="props.type"
				:name="props.name"
				:value="props.inputValue"
				@input="$emit('update:inputValue', $event.target.value)"
				@focus="isActive = true"
				@focusout="isActive = false"
				@focusin="isActive = true"
				:disabled="isPending ? true : false"
				:as="props.inputType"
				:validateOnBlur="true"
				:rules="rules"
				:class="{ 'is-error': !rules }"
			/>
		</label>
		<VErrorMessage :name="props.name" class="input__error-message" />
	</div>
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
		inputType: {
			type: String,
			default: 'input',
			required: false,
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
		rules: {
			type: Object,
			default: () => {},
		},
	})

	defineEmits(['update:inputValue'])

	let isActive = ref(false)

	const isInputValue = computed(() => {
		return (isActive = props.inputValue?.length > 0 ? true : false)
	})
</script>
