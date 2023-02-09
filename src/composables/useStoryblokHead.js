export const useStoryblokHead = async (seo) => {
  if (!seo) {
    return
  }

  await useHead({
    title: seo.title,
    meta: [
      {
        name: 'description',
        content: seo.description || null,
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: seo.title || null,
      },
      {
        property: 'og:description',
        content: seo.description || null,
      },
      {
        property: 'og:image',
        content: seo.images?.edges[0]?.node?.src || null,
      },
      {
        property: 'twitter:title',
        content: seo.title,
      },
      {
        property: 'twitter:description',
        content: seo.description || null,
      },
      {
        property: 'twitter:image',
        content: seo.images?.edges[0]?.node?.src || null,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  })
}