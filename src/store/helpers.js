import { defineStore } from 'pinia'

export const useHelpersStore = defineStore('Helpers', {
  actions: {
    price(amount, currencyCode) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
      }).format(Number(amount))
    }
  }
})
