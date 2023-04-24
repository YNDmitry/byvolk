import 'vanilla-cookieconsent'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    window.CookieConsentApi = window.initCookieConsent()

    const config = {
      current_lang: 'en',
      page_scripts: true,
      gui_options: {
        consent_modal: {
          layout: 'box',
          position: 'bottom left',
          swap_buttons: false
        }
      },

      languages: {
        en: {
          consent_modal: {
            title: 'We use cookies!',
            description:
              'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
            primary_btn: {
              text: 'Accept all',
              role: 'accept_all'
            },
            secondary_btn: {
              text: 'Reject all',
              role: 'accept_necessary'
            }
          },
          settings_modal: {
            title: 'Cookie Settings',
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all',
            close_btn_label: 'Close',
            blocks: [
              {
                title: 'Cookie usage 📢',
                description:
                  'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy-policy" class="cc-link">privacy policy</a>.'
              },
              {
                title: 'Strictly necessary cookies',
                description:
                  'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true
                }
              },
              {
                title: 'Performance and Analytics cookies',
                description:
                  'These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor.',
                toggle: {
                  value: 'analytics',
                  enabled: false,
                  readonly: false
                }
              },
              {
                title: 'Advertisement and Targeting cookies',
                description:
                  'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                toggle: {
                  value: 'targeting',
                  enabled: false,
                  readonly: false
                }
              }
            ]
          }
        }
      }
    }

    window.CookieConsentApi.run(config)
  })
})
