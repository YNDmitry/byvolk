<template>
	<section v-editable="blok" class="section-big-form">
		<div class="container">
			<div class="section-big-form__wrapper">
				<div class="section-big-form__head">
					<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
					<div v-html="richtext" class="mt-medium up" v-if="richtext"></div>
				</div>
				<div>
					<form
						class="big-form"
						@submit.prevent="submitHandler()"
						v-if="!isSuccess"
					>
						<div class="big-form__inputs">
							<FormDefaultInput
								:title="input.placeholder"
								:name="input.name"
								:type="input.type"
								v-for="input in dataInputs"
								:key="input._uid"
								:class="{ 'is-full': input.fullWidth }"
								:isTextArea="input.textArea"
								v-model:inputValue="input.value"
								:isPending="isPending"
								class="up"
							></FormDefaultInput>
						</div>
						<button type="submit" class="button-primary up">
							{{ isPending ? 'Loading...' : 'Submit' }}
						</button>
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
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const dataInputs = ref(
		props.blok.inputs.map((el) => ({
			...el,
			value: '',
		}))
	)

	const isPending = ref(false)
	const isSuccess = ref(false)
	const isError = ref(false)

	const submitHandler = async () => {
		isPending.value = true
		let model = ''
		dataInputs.value.forEach((el) => {
			return (model +=
				`<strong>${el.placeholder}: </strong>` + el.value + '<br>')
		})

		try {
			await $fetch('/api/email', {
				method: 'POST',
				body: {
					subject: 'Form',
					html: model,
				},
			})
			return (isSuccess.value = true)
		} catch (error) {
			isPending.value = false
			return (isError.value = true)
		}
	}

	const richtext = computed(() => renderRichText(props.blok.description))
</script>

<style lang="scss" src="assets/scss/components/_bigForm.scss"></style>
