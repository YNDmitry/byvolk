import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    gsap.registerPlugin(ScrollTrigger)
    setTimeout(() => {
      gsap.utils.toArray('.up').forEach((el) => {
        gsap.set(el, {
          css: {
            scale: 0.5,
            opacity: 0
          }
        })
        gsap.to(el, {
          css: {
            scale: 1,
            opacity: 1,
          },
          scrollTrigger: {
            trigger: el,
            start: 'bottom 100%',
            once: true,
          },
          duration: 0.8,
          ease: Power1.easeOut
        })
      })
    }, 400)
  })
})