import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.up').forEach((el) => {
      gsap.set(el, {
        css: {
          translateY: '70px',
          opacity: 0
        }
      })
    })
  })
  nuxtApp.hook('page:finish', () => {
    gsap.utils.toArray('.up').forEach((el) => {
      // gsap.set(el, {
      //   css: {
      //     translateY: '70px',
      //     opacity: 0
      //   }
      // })
      gsap.to(el, {
        css: {
          translateY: '0px',
          opacity: 1,
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          once: true,
        },
        duration: 1.5,
        ease: Power1.easeOut
      })
    })
  })
  nuxtApp.hook('page:transition:finish', () => {
    gsap.utils.toArray('.up').forEach((el) => {
      gsap.set(el, {
        css: {
          translateY: '70px',
          opacity: 0
        }
      })
      gsap.to(el, {
        css: {
          translateY: '0px',
          opacity: 1,
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          once: true,
        },
        duration: 1.5,
        ease: Power1.easeOut
      })
    })
  })
})