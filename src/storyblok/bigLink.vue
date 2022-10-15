<template>
	<div v-editable="blok" class="big-link">
		<div class="container">
			<div class="text-center">
				<NuxtLink :to="blok.link.cached_url" class="m-auto">{{
					blok.title
				}}</NuxtLink>
			</div>
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
	.big-link {
		padding: 164px 0;

		& a {
			font-family: 'Montserrat';
			font-size: 50px;
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.15em;
			line-height: 100%;
			text-shadow: 0px 0px 5px white;
			color: black;
			padding-bottom: 20px;
			border-bottom: 1px solid white;
			transition: all 200ms ease;

			&:hover {
				color: white;
			}
		}
	}
</style>
