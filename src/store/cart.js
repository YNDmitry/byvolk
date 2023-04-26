import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isPending: false,
      isError: null,
      items: []
    }
  },

  getters: {
    productPrice(state) {
      localStorage.setItem('cartItems', JSON.stringify(state.items))
      return state.items.reduce(
        (totalPrice, item) => totalPrice + Number(item.variantId.price) * item.quantity,
        0
      )
    },
    currencyCode(state) {
      return state.items[0] ? state.items[0].variantId.currencyCode : ''
    }
  },

  actions: {
    handleModal() {
      this.isOpen = !this.isOpen
    },

    addToCart(item) {
      if (this.items.find((el) => el.variantId.id === item.id)) {
        this.items[this.items.findIndex((el) => el.variantId.id === item.id)].quantity++
      } else {
        this.items.push({ variantId: item, quantity: 1 })
      }

      localStorage.setItem('cartItems', JSON.stringify(this.items))
      this.handleModal()
    },

    removeFromCart(itemIndex) {
      this.items.splice(itemIndex, 1)
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },

    async submit() {
      if (this.items.length > 0) {
        try {
          this.isPending = true
          const response = await useAsyncGql({
            operation: 'CheckoutCreate',
            variables: {
              lineItems: this.items.map((el) => ({
                variantId: el.variantId.id,
                quantity: el.quantity
              }))
            }
          })

          window.location = response.data.value.checkoutCreate.checkout.webUrl
        } catch (error) {
          this.isError = error
          this.isPending = false
        }
      }
    }
  }
})
