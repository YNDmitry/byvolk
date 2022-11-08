<template>
	<section class="section-timer" v-editable="blok">
		<div class="container">
			<div class="grid-2-col">
				<div class="timer__head">
					<h2 v-if="blok.headline">{{ blok.headline }}</h2>
					<div class="mt-small" v-html="richtext" v-if="richtext"></div>
				</div>
				<div class="timer__body" v-if="isActive">
					<div class="timer__bl">
						<div class="timer__card" v-for="(item, idx) in timer" :key="idx">
							<span class="timer__card-time">{{ item }}</span>
							<span class="timer__card-title">{{ idx }}</span>
						</div>
					</div>
					<FormNewsletter :isWhite="true"></FormNewsletter>
				</div>
				<div class="timer__success" v-else>
					<h4 class="m-auto">Already dropped!</h4>
					<NuxtLink
						v-for="button in blok.successButton"
						:key="button"
						:to="button.link.cached_url"
						:class="[`button-${button.buttonType}`, 'mt-medium', 'w-full']"
					>
						{{ button.title }}
					</NuxtLink>
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

	const richtext = computed(() => renderRichText(props.blok.description))
	let isActive = computed(() => new Date(props.blok.date) <= new Date() ? false : true)
	let endTime = new Date(props.blok.date)

	const timer = reactive({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})
	
	onMounted(() => {
		const init = () => {
			endTime = Date.parse(endTime) / 1000

			let now = new Date()
			now = Date.parse(now) / 1000

			if (endTime <= now) {
				isActive.value = false
				return clearInterval(interval)
			}

			let timeLeft = endTime - now

			let days = Math.floor(timeLeft / 86400)
			let hours = Math.floor((timeLeft - days * 86400) / 3600)
			let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
			let seconds = Math.floor(
				timeLeft - days * 86400 - hours * 3600 - minutes * 60
			)

			if (hours < '10') {
				hours = '0' + hours
			}
			if (minutes < '10') {
				minutes = '0' + minutes
			}
			if (seconds < '10') {
				seconds = '0' + seconds
			}

			timer.days = days
			timer.hours = hours
			timer.minutes = minutes
			timer.seconds = seconds
		}
		const interval = setInterval(() => {
			init()
		}, 1000)
	})
</script>
