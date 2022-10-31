<template>
	<Teleport to="body">
		<div class="cookie" ref="cookie" id="cc--main" v-if="!isActive">
			<div>
				<p>
					By clicking "Accept all cookies", you agree to cookies being stored on
					your device to improve website navigation, analyse website usage and
					support our marketing efforts. For more information, please see
					<NuxtLink to="/privacy-policy">our privacy policy.</NuxtLink>
				</p>
				<div class="cookie__buttons">
					<NuxtLink class="button-secondary w-full" @click="accept()">Accept</NuxtLink>
					<NuxtLink class="button-transparent w-full">Settings</NuxtLink>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
	let isActive = ref(false)
	function accept() {
		isActive = !isActive
	}

</script>
