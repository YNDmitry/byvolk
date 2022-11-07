import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isPending: false,
      isError: null,
      items: [],
    }
  },

  getters: {
    productPrice(state) {
      localStorage.setItem('cartItems', JSON.stringify(state.items))
      return state.items.map(el => Number(el.variantId.price) * el.quantity).reduce((pV, cV) => pV + cV)
    },
    currencyCode(state) {
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
      if (this.items.find(el => el.variantId.id === item.id)) {
        this.items.find(el => el.variantId.id === item.id).quantity++
      } else {
        this.items.push({ variantId: item, quantity: 1 })
      }
      
      localStorage.setItem('cartItems', JSON.stringify(this.items))
      this.handleModal()
    },

    removeFromCart(item) {
      this.items.splice(item, 1)
      localStorage.setItem('cartItems', JSON.stringify(this.items))
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