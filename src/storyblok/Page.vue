<template>
	<div v-editable="blok">
		<component
			v-for="item in blok?.body"
			:key="item._uid"
			:blok="item"
			:is="item.component"
		/>
	</div>
</template>

<script setup>
	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>
