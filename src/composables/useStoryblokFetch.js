export const usePagePreview = () => useState('pagePreview', () => false);

export const useStoryblokFetch = async (locale) => {
	const route = useRoute();
	let currentRoute = { ...route }

	const localeString = `/${locale}`

	if (currentRoute.path.startsWith(localeString)) {
		currentRoute.path = currentRoute.path.slice(localeString.length)
	}

	if (currentRoute.path === '/') {
		currentRoute.path = 'home'
	}

	const storyblokApiInstance = useStoryblokApi()

	// Check if the page is in preview mode or not 
	// and set the version accordingly 
	let version;
	if (currentRoute.query._storyblok !== '') {
		version = 'published'
	} else {
		version = 'draft'
	}

	let story

	// If the page is in preview mode, get the story from StoryblokBridge, otherwise get it from AsyncData hook 
	if (version === 'draft') {
		story = await useStoryblokBridge(story?.id, (evStory) => {
			story = evStory
		})
	} else {
		story = await useAsyncData(`${currentRoute.path}-asyncdata`, async () =>
			await storyblokApiInstance.get(`cdn/stories/${currentRoute.path}`, {
				version: version,
			})).then((res) => res?.data?.value?.data?.story)
	}

	return story
}