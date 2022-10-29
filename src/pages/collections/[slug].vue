<template>
	<div>
		<section class="section-hero">
			<div class="container-md">
				<h1>{{ data.collectionByHandle.title }}</h1>
				<p v-if="data.collectionByHandle.description">
					{{ data.collectionByHandle.description }}
				</p>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="grid-3-col" v-if="data">
					<ProductBlock
						v-for="card in data.collectionByHandle.products.edges"
						:key="card"
						:title="card.node.title"
						:images="card.node.images.edges"
						:currency-code="card.node.priceRange.minVariantPrice.currencyCode"
						:min-price="card.node.priceRange.minVariantPrice.amount"
						:handle="card.node.handle"
						:total-inventory="card.node.totalInventory"
						class="product-card"
					></ProductBlock>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	const { slug } = useRoute().params
	const { data } = await useAsyncGql({
		operation: 'CollectionByHandle',
		variables: {
			handle: slug,
		},
	})

	useHead({
		title: data.value.collectionByHandle.title,
		meta: [
			{
				name: 'description',
				content: data.value.collectionByHandle.description
			},
			{
				name: 'og:type',
				content: 'website'
			},
			{
				name: 'og:title',
				content: data.value.collectionByHandle.title
			},
			{
				name: 'og:description',
				content: data.value.collectionByHandle.description
			},
			{
				name: 'twitter:title',
				content: data.value.collectionByHandle.title
			},
			{
				name: 'twitter:description',
				content: data.value.collectionByHandle.description
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image'
			}
		]
	})
</script>
