interface Head {
  title: string
  link: { rel: string; type: string; href: string }[]
  noscript: { innerHTML: string }[]
  htmlAttrs: { lang: string }
}

interface PageTransition {
  name: string
  mode: 'default' | 'in-out' | 'out-in'
}

export interface AppConfig {
  baseURL?: string
  buildAssetsDir?: string
  cdnURL?: string
  head: Head
  pageTransition: PageTransition
}

export const appConfig: AppConfig = {
  head: {
    title: 'BYVOLK',
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    noscript: [
      {
        innerHTML:
          '<div class="noscript">This site requires JavaScript to be enabled to work properly</div>'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
}
