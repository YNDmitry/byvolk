<template>
	<form class="form-newsletter" @submit.prevent="handleSubmit()">
		<h6 v-if="title" class="up">{{ title }}</h6>
		<template v-if="!isSuccess">
			<div
				:class="[
					'form-newsletter__input-wrapper',
					{ 'is-white': isWhite },
					'up',
				]"
			>
				<FormDefaultInput
					:title="'Email address'"
					:name="'Email'"
					:type="'email'"
					v-model:input-value="email"
					:isPending="isPending"
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
	const props = defineProps({
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

	const isPending = ref(false)
	const isSuccess = ref(false)
	const isError = ref(false)
	const email = ref('')

	const handleSubmit = async () => {
		isPending.value = true
		await $fetch('/api/email', {
			method: 'POST',
			body: {
				subject: 'Newsletter Form',
				html: `<strong>Email: </strong>${email.value}`,
			},
		})
			.then(() => {
				return (isSuccess.value = true)
			})
			.catch((err) => {
				isPending.value = false
				return (isError.value = true)
			})
	}
</script>

<style lang="scss" src="assets/scss/components/_formNewsletter.scss"></style>
