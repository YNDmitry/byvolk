<template>
	<section class="projects" v-editable="blok">
		<div class="container">
			<ProjectsCard
				v-for="project in blok.projectsCard"
				:key="project"
				:images="project.images"
				:body="renderRichText(project.body)"
				:width="project.imageWidth"
				:height="project.imageHeight"
			></ProjectsCard>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => {},
		},
	})
</script>

<style lang="scss" src="../assets/scss/components/_projects.scss"></style>
