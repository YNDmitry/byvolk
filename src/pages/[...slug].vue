<template>
  <main class="main">
    <Body>
      <StoryblokComponent :blok="story?.content" v-if="story?.content" />
    </Body>
  </main>
</template>

<script setup>
const currentSlug = useRoute().path
const story = await useStoryblokFetch(currentSlug).catch(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found or something went wrong'
  })
})
await useStoryblokHead(story?.content?.SEO)
</script>
