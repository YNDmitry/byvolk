<template>
	<Teleport to="body">
		<Transition name="modal-cart">
			<div class="cart-wrapper" v-if="modal.$state.isOpen">
				<div class="cart-wrapper__overlay" @click="modal.handleModal()"></div>
				<div class="cart">
					<!-- <h4 class="cart__empty">Your cart is empty :(</h4> -->
					<div class="cart__head">
						<h4>Cart</h4>
						<button @click="modal.handleModal()">
							<icons-close></icons-close>
						</button>
					</div>
					<div class="cart__body"></div>
					<div class="cart__footer"></div>
					<!-- <template> -->
					<!-- </template> -->
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	import { useCartStore } from '~~/src/store/cart'

	const modal = useCartStore()
</script>
