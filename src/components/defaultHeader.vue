<template>
	<header class="header">
		<div class="container">
			<div class="header__desk-content">
				<NuxtLink to="/" class="header__brand">
					<IconsLogo></IconsLogo>
				</NuxtLink>
				<nav>
					<ul class="header__nav-list list-unstyled" v-if="menu.data">
						<li v-for="item in menu.data.datasource_entries" :key="item.id">
							<NuxtLink :to="item.value" class="header__link">
								<div>{{ item.name }}</div>
							</NuxtLink>
						</li>
					</ul>
				</nav>
				<div class="header__cart" @click="cartModal.handleModal()">
					<div class="header__cart-count" v-if="cartModal.items.length > 0">
						{{ cartModal.items.length }}
					</div>
					<IconsCart></IconsCart>
				</div>
				<div
					class="header__mobile-menu"
					v-if="useMediaQuery('(max-width: 771px)').value"
				></div>
				<div class="header__menu-btn">
					<div
						v-for="item in 3"
						:key="item"
						class="header__menu-btn-burger"
					></div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { useCartStore } from '../store/cart'

	const { data: menu } = await useAsyncData('menu', async () => {
		return await useStoryblokApi().get(
			'cdn/datasource_entries?datasource=menu-links',
			{
				version: 'published',
			}
		)
	})

	const cartModal = useCartStore()

	const { x, y } = useWindowScroll()
</script>
