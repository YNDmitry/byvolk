<template>
	<header class="header" :class="{ 'menu-is-open': isOpen ? true : false }">
		<div class="container">
			<div class="header__desk-content">
				<NuxtLink to="/" class="header__brand">
					<IconsLogo></IconsLogo>
				</NuxtLink>
				<ClientOnly>
					<Teleport to=".header__mobile-menu" :disabled="isMobile">
						<nav>
							<ul class="header__nav-list list-unstyled" >
								<li v-for="item in menu.datasource_entries" :key="item.id">
									<NuxtLink :to="item.value" class="header__link">
										<div>{{ item.name }}</div>
									</NuxtLink>
								</li>
							</ul>
						</nav>
						<div class="flex center">
							<LocationsSelect :data="languages.datasource_entries"></LocationsSelect>
							<div class="header__cart" @click="cartModal.handleModal()">
								<div class="header__cart-count" v-if="cartModal.items.length > 0">
									{{ cartModal.items.length }}
								</div>
								<IconsCart></IconsCart>
							</div>
						</div>
					</Teleport>
				</ClientOnly>
				<Transition name="menu-open">
					<div class="header__mobile-menu" v-show="isOpen"></div>
				</Transition>
				<div class="header__menu-btn" @click="openMenu()">
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

	let menu = ref(null)
	let languages = ref(null)
	let isOpen = ref(false)
	const cartModal = useCartStore()

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 769px)').value) {
			return false
		}
		return true
	})

	await useAsyncData('menu', async () => {
		return await useStoryblokApi().get(
			'cdn/datasource_entries?datasource=menu-links',
			{
				version: 'published',
			}
		)
	}).then(res => menu = res.data.value.data)

	await useAsyncData('languages', async () => {
    return await useStoryblokApi().get(
      'cdn/datasource_entries?datasource=languages',
      {
        version: 'published',
      }
    )
  }).then(res => languages = res.data.value.data)

	function openMenu() {
		isOpen.value === false ? isOpen.value = true : isOpen.value = false
	}
</script>
