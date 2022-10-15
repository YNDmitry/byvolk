<template>
	<label class="input">
		<span :class="isInputValue ? 'is-active' : ''">{{ props.title }}</span>
		<textarea
			:name="props.name"
			v-if="isTextArea"
			v-model="inputValue.value"
			@focus="isActive = true"
			@focusout="isActive = false"
			required
		></textarea>
		<input
			v-else
			:type="props.type"
			:name="props.name"
			v-model="inputValue.value"
			@focus="isActive = true"
			@focusout="isActive = false"
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

<style lang="scss">
	.input {
		position: relative;
		min-height: 48px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
		cursor: text;

		&.is-full {
			grid-column: span 2;
		}

		& span {
			position: absolute;
			left: 0;
			top: 17px;
			font-size: 12px;
			font-weight: 500;
			line-height: 15px;
			color: rgba(0, 0, 0, 0.4);
			text-transform: uppercase;
			letter-spacing: 0.2em;
			pointer-events: none;
			transition: all 200ms ease;

			&.is-active {
				top: -5px;
				font-size: 8px;
			}
		}

		& input,
		textarea {
			border: 0;
			width: 100%;
		}

		& textarea {
			min-height: 300px;
			max-height: 500px;
			min-width: 100%;
			max-width: 100%;
			width: 100%;
			padding-top: 17px;
		}
	}
</style>
