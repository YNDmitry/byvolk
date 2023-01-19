import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)
  nuxtApp.hook('app:beforeMount', () => {
    gsap.utils.toArray('.up').forEach((el) => {
      gsap.set(el, {
        css: {
          translateY: '70px',
          opacity: 0
        }
      })
    })
    gsap.utils.toArray('.fade').forEach((el) => {
      gsap.set(el, {
        css: {
          opacity: 0
        }
      })
    })
  })
  nuxtApp.hook('page:finish', () => {
    gsap.utils.toArray('.up').forEach((el) => {
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
    gsap.utils.toArray('.fade').forEach((el) => {
      gsap.to(el, {
        css: {
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
    gsap.utils.toArray('.fade').forEach((el) => {
      gsap.set(el, {
        css: {
          opacity: 0
        }
      })
      gsap.to(el, {
        css: {
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