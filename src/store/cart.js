import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isLocked: false,
      isPending: false,
      isError: null,
      items: useLocalStorage('cartItems', []),
      productPrices: null
    }
  },

  getters: {
    productPrice(state) {
      return state.productPrices = state.items.length > 0
        ? state.items.map(el => Number(el.variantId.price) * el.quantity)
        : 0
    },
    totalPrice: (state) => {
      if (state.items.length > 1) {
        return state.productPrices.reduce(el => el + el)
      } else {
        return state.productPrices
      }
    },
    currencyCode: (state) => {
      return state.items.length > 0 ? state.items[0].variantId.currencyCode : ''
    },
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
        this.isPending = true
        const { data, pending } = await useAsyncGql({
          operation: 'CheckoutCreate',
          variables: {
            lineItems: [...this.items].map(el => el = {
              variantId: el.variantId.id,
              quantity: el.quantity
            })
          }
        })
          .then(res => window.location = res.data.value.checkoutCreate.checkout.webUrl)
          .catch(err => {
            this.isError = err
            this.isPending = false
          })
      }
    }
  }
})