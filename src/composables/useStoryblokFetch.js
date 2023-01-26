export const usePagePreview = () => useState('pagePreview', () => false)

export const useStoryblokFetch = async (locale) => {
	const route = useRoute()
	const currentRoute = { ...route }
	const localeString = `/${locale}`

	if (currentRoute.path.startsWith(localeString)) {
		currentRoute.path = currentRoute.path.slice(localeString.length)
	}

	if (currentRoute.path === '/') {
		currentRoute.path = 'home'
	}

	const storyblokApiInstance = useStoryblokApi()

	const isPreview = !(currentRoute.query._storyblok !== '')
	const version = isPreview ? 'draft' : 'published'

	let story

	if (version === 'draft') {
		story = await useStoryblokBridge(story?.id, (evStory) => {
			story = evStory
		})
	} else {
		story = await useAsyncData(
			`${currentRoute.path}-asyncdata`,
			async () =>
				await storyblokApiInstance.get(`cdn/stories/${currentRoute.path}`, {
					version: version,
				})
		).then((res) => res?.data?.value?.data?.story)
	}

	// if (!story) throw createError({ statusCode: 404, message: 'Page not found' })

	return story
}
