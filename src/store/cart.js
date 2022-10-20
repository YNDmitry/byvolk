import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isLocked: false,
      items: [],
    }
  },

  getters: {
    totalPrice: (state) => {
      if (state.items.length > 0) {
        return state.items.length === 1 ? state.items[0].variantId.price : state.items.reduce(
          (firstEl, secondEl) =>
            Number(firstEl.variantId.price) + Number(secondEl.variantId.price)
        )
      } else {
        return 0
      }
    },
    currencyCode: (state) => {
      return state.items.length > 0 ? state.items[0].variantId.currencyCode : ''
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

    removeFromCart(item) {
      return this.items.splice(item, 1)
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