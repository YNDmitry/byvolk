<template>
  <section class="projects" v-editable="blok">
    <div class="container">
      <ProjectsCard v-for="project in blok.projectsCard" :key="project" :images="project.images" :body="renderRichText(project.body)"></ProjectsCard>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => {}
    }
  })
</script>