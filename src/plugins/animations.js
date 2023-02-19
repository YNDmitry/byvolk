import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  const setUpAnimation = (elClassName, yValue, opacityValue) => {
    gsap.utils.toArray(elClassName).forEach((el) => {
      gsap.set(el, { y: yValue, opacity: opacityValue })

      gsap.to(el, {
        y: '0px',
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'top 100%', once: true },
        duration: 1,
        ease: Power1.easeInOut
      })
    })
  }

  const fadeInOutCards = (elements) => {
    if (!elements) {
      return
    }

    const cards = gsap.timeline({
      defaults: { duration: 0.4, ease: "Power1.easeInOut" }
    })
    elements.forEach((card, i) => {
      gsap.set(card, { opacity: 0 });
      cards.to(card, { opacity: 1, stagger: 0.1 * i });
    })
  }

  nuxtApp.hook('app:beforeMount', (ctx) => {
    setUpAnimation('.up', '70px', 0)
    setUpAnimation('.fade', 0, 0)
    fadeInOutCards(document.querySelectorAll('.fade-card'))
  })

  nuxtApp.hook('page:transition:finish', () => {
    setUpAnimation('.up', '70px', 0)
    setUpAnimation('.fade', 0, 0)
    fadeInOutCards(document.querySelectorAll('.fade-card'))
  })
})