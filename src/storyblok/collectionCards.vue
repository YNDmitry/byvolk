<template>
	<section v-editable="blok" class="section-collections">
		<div class="container">
			<div v-if="collections">
				<div
					class="collections__cards"
					v-for="collection in collections"
					:key="collection"
				>
					<div class="collections__cards-head">
						<h2 class="up" v-if="collection.node.title">
							{{ collection.node.title }}
						</h2>
						<span class="up" v-if="collection.node.description">{{
							collection.node.description
						}}</span>
					</div>
					<div class="collections__cards-items">
						<ProductBlock
							v-for="card in collection.node.products.edges"
							:key="card"
							:title="card.node.title"
							:images="card.node.images.edges"
							:currency-code="card.node.priceRange.minVariantPrice.currencyCode"
							:min-price="card.node.priceRange.minVariantPrice.amount"
							:total-inventory="card.node.totalInventory"
							:handle="card.node.handle"
							class="product-card up"
						></ProductBlock>
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

<style
	lang="scss"
	src="../assets/scss/components/_collectionCards.scss"
></style>
