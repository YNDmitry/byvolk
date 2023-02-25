<template>
	<header class="header" :class="{ 'menu-is-open': isOpen ? true : false }">
		<div class="container">
			<div class="header__desk-content">
				<NuxtLink
					to="/"
					class="header__brand"
					aria-label="Logo"
					@click="!isMobile && isOpen ? openMenu() : ''"
				>
					<IconsLogo></IconsLogo>
				</NuxtLink>
				<nav class="phone-hide" aria-label="Site menu">
					<ul class="header__nav-list list-unstyled">
						<li v-for="item in menu" :key="item.id">
							<NuxtLink :to="item.value" class="header__link" :disabled="isHeaderLinkActive">
								<div>{{ item.name }}</div>
							</NuxtLink>
						</li>
					</ul>
				</nav>
				<div class="flex center phone-hide">
					<div class="header__cart" @click="cartModal.handleModal()">
						<div class="header__cart-count" v-if="cartModal.items.length > 0">
							{{ cartModal.items.length }}
						</div>
						<IconsCart></IconsCart>
					</div>
				</div>
				<Transition name="menu-open">
					<div class="header__mobile-menu" v-if="isOpen">
						<nav aria-label="Site mobile menu">
							<ul class="header__nav-list list-unstyled">
								<li v-for="item in menu" :key="item.id">
									<NuxtLink :to="item.value" class="header__link" @click="openMenu()">
										<div>{{ item.name }}</div>
									</NuxtLink>
								</li>
							</ul>
						</nav>
						<div class="flex center">
							<div class="header__cart" @click="cartModal.handleModal()">
								<div class="header__cart-count" v-if="cartModal.items.length > 0">
									{{ cartModal.items.length }}
								</div>
								<div class="header__cart-count-txt" v-if="cartModal.items.length > 0">
									({{ cartModal.items.length }})
								</div>
								<IconsCart></IconsCart>
							</div>
						</div>
					</div>
				</Transition>
				<div
					class="header__menu-btn"
					:class="{ active: isOpen ? true : false }"
					@click="openMenu()"
				>
					<div v-for="item in 3" :key="item" class="header__menu-btn-burger"></div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { useCartStore } from '../store/cart'

	const props = defineProps({
		menu: {
			type: Object,
		},
	})

	let isOpen = ref(false)
	let isHeaderLinkActive = ref(false)
	const isMobile = useIsMobile
	const cartModal = useCartStore()

	useNuxtApp().hook('page:start', () => {
		isHeaderLinkActive.value = true
	})

	useNuxtApp().hook('app:error:cleared', () => {
		isHeaderLinkActive.value = false
	})

	useNuxtApp().hook('page:transition:finish', () => {
		isHeaderLinkActive.value = false
	})

	const menu = await useAsyncData('menu', async () => {
		return await useStoryblokApi().get('cdn/datasource_entries?datasource=menu-links', {
			version: 'published',
		})
	}).then((res) => res.data.value.data.datasource_entries)

	function openMenu() {
		return (isOpen.value = !isOpen.value ? true : false)
	}
</script>

<style lang="scss" src="assets/scss/components/_header.scss"></style>
