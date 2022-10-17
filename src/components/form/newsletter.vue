<template>
	<form class="form-newsletter">
		<h5 v-if="title">{{ title }}</h5>
		<div :class="['form-newsletter__input-wrapper', { 'is-white': isWhite }]">
			<input type="email" placeholder="Email adress" name="email" required />
			<button type="submit" class="form-newsletter__input-wrapper_button">
				<IconsArrowRight
					class="form-newsletter__input-wrapper-arrow"
				></IconsArrowRight>
			</button>
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
