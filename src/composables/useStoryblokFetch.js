export const useStoryblokFetch = async (locale) => {
  const version = useRuntimeConfig().public.storyblokVersion
  const route = useRoute()
  let currentRoute = { ...route }

  const localeString = `/${locale}`

  if (currentRoute.path.startsWith(localeString)) {
    currentRoute.path = currentRoute.path.slice(localeString.length)
  }

  if (currentRoute.path === '/') {
    currentRoute.path = '/home'
  }

  const storyblokApiInstance = useStoryblokApi()

  let story

  if (version === 'draft') {
    story = await useStoryblok(currentRoute.path, {
      version: version
    })
    onMounted(() => {
      useStoryblokBridge(story.id, (evStory) => story = evStory)
    })
  } else {
    story = await useAsyncData(
      `${currentRoute.path}-asyncdata`,
      async () =>
        await storyblokApiInstance.get(`cdn/stories${currentRoute.path}`, {
          version: version
        })
    ).then((res) => res?.data?.value?.data?.story)
  }

  return story
}
