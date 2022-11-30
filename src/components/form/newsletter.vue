<template>
	<form class="form-newsletter">
		<h6 v-if="title" class="up">{{ title }}</h6>
		<div :class="['form-newsletter__input-wrapper', { 'is-white': isWhite }, 'up']">
			<DefaultInput
				:title="'Email address'"
				:name="'Email'"
				:type="'email'"
			></DefaultInput>
			<button type="submit" class="button-primary">Subscribe</button>
		</div>
	</form>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			required: false,
			default: '',
		},
		isWhite: {
			type: Boolean,
			required: false,
			default: false,
		},
	})
</script>
