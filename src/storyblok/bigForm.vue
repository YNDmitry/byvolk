<template>
	<section v-editable="blok" class="section-big-form">
		<div class="container">
			<div class="grid-2-col">
				<div>
					<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
					<div v-html="richtext" class="mt-medium up" v-if="richtext"></div>
				</div>
				<div>
					<form class="big-form">
						<div class="big-form__inputs">
							<DefaultInput
								:title="input.placeholder"
								:name="input.name"
								:type="input.type"
								v-for="input in blok.inputs"
								:key="input"
								:class="{ 'is-full': input.fullWidth }"
								:isTextArea="input.textArea"
								class="up"
							></DefaultInput>
						</div>
						<button type="submit" class="button-primary w-full up">Submit</button>
					</form>
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

	const richtext = computed(() => renderRichText(props.blok.description))
</script>
