<template>
	<div class="grid-card">
		<div class="grid-card__picture-wrapper">
			<NuxtImg
				:src="content.image.filename"
				provider="storyblok"
				quality="70"
				width="700"
				class="grid-card__picture"
			></NuxtImg>
		</div>
		<div class="grid-card__info">
			<h3 v-if="content.headline">{{ content.headline }}</h3>
			<h4 v-if="content.headline2">{{ content.headline2 }}</h4>
			<div v-html="richtext" v-if="richtext" class="grid-card__rich"></div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	})

	const richtext = computed(() => renderRichText(props.content.description))
	const opacity = computed(() => Number(props.content.imageOpacity)).value
</script>

<style lang="scss">
	body.dark {
		& .grid-card {
			&__picture-wrapper {
				&::before {
					background-color: black;
				}
			}
		}
	}

	.grid-card {
		display: flex;
		position: relative;

		&__picture-wrapper {
			width: 52%;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				background-color: #f8f8f8;
				opacity: 0.5;
			}
		}

		&__info {
			position: absolute;
			top: 124px;
			max-width: 700px;
			right: 0;

			& h3 {
				font-size: 68px;
				font-weight: 700;
			}

			& h4 {
				font-size: 28px;
				margin: 18px 0;
			}
		}

		&__rich,
		& h4 {
			margin-left: 85px;
		}
	}
</style>
