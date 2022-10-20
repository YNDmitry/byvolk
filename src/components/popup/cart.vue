<template>
	<Teleport to="body">
		<Transition name="modal-cart">
			<div class="cart-wrapper" v-if="cart.isOpen">
				<div class="cart-wrapper__overlay" @click="cart.handleModal()"></div>
				<div class="cart">
					<!-- <h4 class="cart__empty">Your cart is empty :(</h4> -->
					<div class="cart__head">
						<h5>Your prints</h5>
						<button @click="cart.handleModal()">
							<icons-close></icons-close>
						</button>
					</div>
					<div class="cart__body" v-if="cart.items.length > 0">
						<div
							class="cart__body-card"
							v-for="(card, idx) in cart.items"
							:key="idx"
						>
							<div class="cart__body-card-img">
								<NuxtImg :src="card.variantId.image"></NuxtImg>
							</div>
							<div class="cart__body-card-info">
								<div class="cart__body-card-info-head">
									<h6>{{ card.variantId.title }}</h6>
									<p>
										{{ card.variantId.description }}
									</p>
								</div>
								<div class="cart__body-card-info-footer">
									<PlusMinusInput :value="card.quantity"></PlusMinusInput>
									<button
										type="button"
										class="cart__body-card-remove"
										@click="cart.removeFromCart(idx)"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					</div>
					<div v-else class="cart__empty">Your cart is empty :(</div>
					<div class="cart__footer" v-if="cart.items.length > 0">
						<div class="cart__footer-info">
							<span
								>Total price:
								<strong>{{
									price(cart.totalPrice, cart.currencyCode)
								}}</strong></span
							>
							<span
								>Total items: <strong>{{ cart.items.length }}</strong></span
							>
						</div>
						<button
							type="button"
							class="button-primary w-full"
							@click="cart.submit()"
						>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	import { useCartStore } from '~~/src/store/cart'

	const price = (amount, currencyCode) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currencyCode,
		}).format(amount)
	}

	const cart = useCartStore()
</script>
