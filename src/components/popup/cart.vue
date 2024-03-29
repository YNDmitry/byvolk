<template>
  <Teleport to="body">
    <Transition name="modal-cart">
      <div class="cart-wrapper" v-if="cart.isOpen">
        <div class="cart-wrapper__overlay" @click="cart.handleModal()"></div>
        <div class="cart">
          <div class="cart__head">
            <h5>Your prints</h5>
            <button @click="cart.handleModal()">
              <icons-close></icons-close>
            </button>
          </div>
          <ul class="cart__body" v-if="cart.items.length > 0">
            <li class="cart__body-card" v-for="(card, idx) in cart.items" :key="idx">
              <div class="cart__body-card-img" v-if="card.variantId.image">
                <NuxtImg
                  :src="card.variantId.image"
                  :alt="card.variantId.title"
                  width="90"
                ></NuxtImg>
              </div>
              <div class="cart__body-card-info">
                <div class="cart__body-card-info-head">
                  <h6>{{ card.variantId.title }}</h6>
                  <p>
                    {{ card.variantId.description }}
                  </p>
                  <div class="cart__body-card-variant mt-xsmall flex">
                    <div>Frame: {{ card.variantId?.variant['frame'] }}</div>
                    <div class="cart__body-card-sep">|</div>
                    <div>Size: {{ card.variantId?.variant['size'] }}</div>
                  </div>
                </div>
                <div class="cart__body-card-info-footer mt-xsmall">
                  <PlusMinusInput
                    :value="card.quantity"
                    @increment="card.quantity++"
                    @decrement="card.quantity--"
                  ></PlusMinusInput>
                  <button
                    type="button"
                    class="cart__body-card-remove"
                    @click="cart.removeFromCart(idx)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div v-else class="cart__empty">Your cart is empty</div>
          <div class="cart__footer" v-if="cart.items.length > 0">
            <div class="cart__footer-info">
              <span
                >Total price:
                <strong>
                  {{ usePrice(cart.productPrice, cart.currencyCode) }}
                </strong>
              </span>
              <span
                >Total items:
                <strong>{{ cart.items.length }}</strong>
              </span>
            </div>
            <button type="button" class="button-primary w-full" @click="cart.submit()">
              {{ cart.isPending ? 'Loading' : 'Checkout' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useCartStore } from '~~/src/store/cart'

const cart = useCartStore()

onMounted(() => {
  cart.items = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
})
</script>

<style lang="scss" src="assets/scss/components/_cart.scss">
.transition-enter {
  opacity: 0;
}
.transition-leave-active {
  transition: opacity 300ms ease-in;
  opacity: 0;
}
.transition-enter-active {
  transition: opacity 300ms ease-in;
  opacity: 1;
}
</style>
