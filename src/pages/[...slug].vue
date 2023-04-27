<template>
  <main class="main">
    <Body>
      <StoryblokComponent v-if="story?.content" :blok="story?.content" />
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
