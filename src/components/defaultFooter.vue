<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div v-motion-up class="footer__soc">
          <NuxtLink
            class="footer__soc-link"
            to="https://www.instagram.com/byvolk/"
            target="_blank"
            aria-label="Instagram link"
          >
            <IconsSocialInstagram></IconsSocialInstagram>
          </NuxtLink>
          <NuxtLink
            class="footer__soc-link"
            target="_blank"
            aria-label="WhatsApp link"
            href="https://wa.me/message/FB7YI2TL5L6WC1"
          >
            <IconsSocialWhatsapp></IconsSocialWhatsapp>
          </NuxtLink>
          <NuxtLink class="footer__soc-link" to="mailto:info@byvolk.com" aria-label="Email link">
            <IconsSocialEmail></IconsSocialEmail>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-motion-fade class="footer__links-wrapper">
      <div class="container">
        <div class="footer__links-grid">
          <a
            href="https://www.trustpilot.com/review/byvolk.com"
            class="footer__trustpilot"
            target="_blank"
          >
            <img src="/trustpilot.png" width="150" alt="Byvolk trustpilot logo" />
          </a>
          <ul class="footer__links list-unstyled">
            <li v-for="link in footerLinks.slice(0, footerLinks.length / 2)" :key="link.id">
              <NuxtLink :to="link.value" class="footer__link">
                {{ link.name }}
              </NuxtLink>
            </li>
            <li class="footer__link center">
              © {{ new Date().getFullYear() }} VOLK | ALL RIGHTS RESERVED
            </li>
            <li
              v-for="link in footerLinks.slice(footerLinks.length / 2, footerLinks.length)"
              :key="link.id"
            >
              <NuxtLink :to="link.value" class="footer__link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
          <div class="footer__payments">
            <IconsApplePay></IconsApplePay>
            <IconsPaypal></IconsPaypal>
            <IconsKlarna></IconsKlarna>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data: footerLinks } = await useAsyncData('footer', async () => {
  return await useStoryblokApi()
    .get('cdn/datasource_entries?datasource=footer-links', {
      version: 'published'
    })
    .then((res) => res.data.datasource_entries)
})
</script>

<style lang="scss" src="assets/scss/components/_footer.scss"></style>
