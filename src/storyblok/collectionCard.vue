<template>
	<div class="collection-card">
		<div class="collection-card__img-mask">
			<NuxtImg
				:src="blok.image.filename"
				class="collection-card__img"
			></NuxtImg>
		</div>
		<div class="collection-card__info">
			<h4>{{ blok.headline }}</h4>
			<NuxtLink
				:class="`button-${button.buttonType}`"
				v-for="button in blok.button"
				:key="button"
				:to="button.url"
			>
				{{ button.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>

<style lang="scss">
	.collection-card {
		position: relative;
		min-height: 600px;
		display: flex;
		align-items: flex-end;
		padding: 32px;

		&__img-mask {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.7);
			}
		}

		&__img {
			object-fit: cover;
			height: 100%;
		}

		&__info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 15px;
			position: relative;
			z-index: 10;

			& h4 {
				color: white;
			}
		}
	}
</style>
