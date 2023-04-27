export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, _, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = (hash, x) => {
      return new Promise((resolve) => {
        const el = document.querySelector(hash)
        if (el) {
          resolve()
        } else if (x > 50) {
          resolve()
        } else {
          setTimeout(() => {
            resolve(findEl(hash, x + 1 || 1))
          }, 100)
        }
      })
    }

    if (to.hash) {
      const el = await findEl(to.hash)
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({
          top: el.offsetTop - document.querySelector('header').clientHeight,
          behavior: 'smooth'
        })
      } else {
        return window.scrollTo(0, el.offsetTop)
      }
    }
    return { x: 0, y: 0 }
  }
})
