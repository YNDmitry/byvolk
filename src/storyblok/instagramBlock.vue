<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
			<div 
				class="instagram__photos"
				:class="blok.headline.length === 0 ? '' : 'mt-medium'"
			>
				<div 
					v-for="item in blok.cards"
					:key="item"
					class="instagram__photos-item up"
				>
					<div class="instagram__photos-item-head">
						<div class="instagram__photos-item-info">
							<div class="instagram__photos-item-avatar">
								<img :src="item.avatar.filename" alt="" v-if="item.avatar">
							</div>
							<div class="instagram__photos-item-user">
								<div v-if="item.name">{{ item.name }}</div>
								<div v-if="item.nickname">{{ item.nickname }}</div>
							</div>
						</div>
						<IconsMore class="instagram__photos-item-head-icon"></IconsMore>
					</div>
					<NuxtLink
						to="https://www.instagram.com/byvolk/" 
						target="_blank"
					>
						<NuxtPicture :src="item?.image.filename" provider="storyblok" loading="lazy" v-if="item?.image" quality="10"></NuxtPicture>
					</NuxtLink>
					<div class="instagram__photos-item-footer" v-if="item.likes">
						<div class="instagram__photos-item-footer-likes">
							<IconsHearh class="instagram__photos-item-footer-likes-icon"></IconsHearh>
							<span>{{ item.likes }}</span>
						</div>
						<IconsShareForward width="20" height="20"></IconsShareForward>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 479px)').value) {
			return false
		}
		return true
	})
</script>
