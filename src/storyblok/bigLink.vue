<template>
	<div v-editable="blok" class="big-link">
		<div class="container">
			<div class="text-center up">
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
