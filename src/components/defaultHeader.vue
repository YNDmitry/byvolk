<template>
	<header class="header" :class="y > 10 ? 'active' : ''">
		<div class="container">
			<div class="header__desk-content">
				<NuxtLink
					:to="
						useState('locale').value === 'default'
							? '/'
							: `/${useState('locale').value}/`
					"
					class="header__brand"
				>
					<IconsLogo></IconsLogo>
				</NuxtLink>
				<nav>
					<ul class="header__nav-list list-unstyled">
						<li v-for="item in data.data.datasource_entries" :key="item.id">
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
			</div>
		</div>
	</header>
</template>

<script setup>
	import { useCartStore } from '../store/cart'
	const { data } = await useAsyncData('menu', async () => {
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
