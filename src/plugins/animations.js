import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const setUpAnimation = (elClassName, yValue, opacityValue) => {
    gsap.utils.toArray(elClassName).forEach((el) => {
      gsap.set(el, { y: yValue, opacity: opacityValue })

      gsap.to(el, {
        y: '0px',
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'top 100%', once: true },
        duration: 1.5,
        ease: Power1.easeOut
      })
    })
  }

  nuxtApp.hook('app:beforeMount', () => setUpAnimation('.up', '70px', 0))

  nuxtApp.hook('page:finish', () => setUpAnimation('.fade', 0, 0))

  nuxtApp.hook('page:transition:finish', () => {
    setUpAnimation('.up', '70px', 0)
    setUpAnimation('.fade', 0, 0)
  })
})