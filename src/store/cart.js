import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      isOpen: false,
      isLocked: false,
      itemsCount: 0
    }
  },

  actions: {
    handleModal() {
      if (this.isOpen) {
        useScrollLock(document.querySelector('body'), false).value = false
        return this.isOpen = false
      } else {
        useScrollLock(document.querySelector('body'), false).value = true
        return this.isOpen = true
      }
    }
  }
})