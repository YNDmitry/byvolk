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

<style lang="scss" scoped>
	.cart-wrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1000;

		&__overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.4);
		}

		& .cart {
			position: relative;
			z-index: 1001;
			max-width: 400px;
			width: 100%;
			height: 100%;
			margin-left: auto;
			background-color: #fff;

			&__empty {
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&__head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 12px 24px;
				border-bottom: 1px solid gray;

				& button {
					background: transparent;
					border: none;
				}
			}
		}
	}

	.modal-cart-enter-active,
	.modal-cart-leave-active {
		transition: all 200ms ease;

		& .cart {
			transition-delay: 0.25s;
			transition: all 200ms ease;
		}
	}

	.modal-cart-enter-form,
	.modal-cart-leave-to {
		& .cart-wrapper__overlay {
			opacity: 0;
		}

		& .cart {
			transform: translateX(100%);
		}
	}
</style>
