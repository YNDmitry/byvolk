import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isLocked: false,
      items: []
    }
  },

  actions: {
    handleModal() {
      if (this.isOpen) {
        return this.isOpen = false
      }
      return this.isOpen = true
    },

    addToCart(item) {
      this.items.push({ variantId: item, quantity: 1 })
      this.handleModal()
    },

    async submit() {
      if (this.items.length > 0) {
        const { data } = await useAsyncGql({
          operation: 'CheckoutCreate',
          variables: {
            lineItems: [...this.items].map(el => el = { variantId: el.variantId.id, quantity: el.quantity })
          }
        }).then(res => window.location = res.data.value.checkoutCreate.checkout.webUrl)
      }
    }
  }
})