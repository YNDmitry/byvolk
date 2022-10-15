<template>
	<div class="cards-grid__wrapper">
		<h2></h2>
		<div class="cards-grid">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	.cards-grid {
		display: flex;
		flex-direction: column;
		gap: 80px;
		margin-top: 72px;
	}
</style>
