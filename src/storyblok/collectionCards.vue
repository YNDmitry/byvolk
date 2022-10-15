<template>
	<section v-editable="blok" class="section-collections">
		<div class="container">
			<h2 v-if="blok.headline">{{ blok.headline }}</h2>
			<div class="grid-2-col mt-large">
				<div
					class="collections__card"
					v-for="collection in collections"
					:key="collection"
				>
					<div class="collections__card-img-wrapper">
						<NuxtImg
							class="collections__card-img"
							:src="collection.node?.image?.src || 'stars.svg'"
						></NuxtImg>
					</div>
					<div class="collections__card-info">
						<h4>{{ collection.node.title }}</h4>
						<NuxtLink
							class="button-secondary mt-small"
							:to="'/collections/' + collection.node.handle"
							>View</NuxtLink
						>
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

	const { data } = await useAsyncGql({
		operation: 'Collections',
		variables: {
			first: 10,
		},
	})

	const collections = await [...data.value.collections.edges].filter(
		(el, idx) =>
			el.node.handle !== 'best-sellers'
				? [...data.value.collections.edges].splice(idx, 1)
				: ''
	)
</script>

<style lang="scss">
	.section-collections {
		padding: 96px 0;

		& .grid-2-col {
			column-gap: 35px;
		}
	}

	.collections__card {
		position: relative;
		height: 630px;
		padding: 24px;
		display: flex;
		align-items: flex-end;
		color: white;

		&-info {
			position: relative;
			z-index: 2;

			& h4 {
				color: white;
			}
		}

		&-img-wrapper {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.7);
		}

		&-img {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: -1;
			object-fit: cover;
		}
	}
</style>
