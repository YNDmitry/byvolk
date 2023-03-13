export const useStoryblokFetch = async (locale) => {
	const config = useRuntimeConfig()
	const route = useRoute();
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


	if (route.query['_storyblok_tk[token]'] !== undefined) {
		story = await useAsyncStoryblok(currentRoute.path, {
			version: 'draft',
			token: config.public.storyblokPreview
		})
	} else {
		story = await useAsyncData(`${currentRoute.path}-asyncdata`, async () =>
			await storyblokApiInstance.get(`cdn/stories${currentRoute.path}`, {
				version: 'published',
				token: config.public.storyblokPublic
			})).then((res) => res?.data?.value?.data?.story)
	}

	return story
}
