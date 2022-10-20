<template>
	<Teleport to="body">
		<div class="cookie">
			<div>
				<p>
					By clicking "Accept all cookies", you agree to cookies being stored on
					your device to improve website navigation, analyse website usage and
					support our marketing efforts. For more information, please see
					<NuxtLink to="/privacy-policy">our privacy policy.</NuxtLink>
				</p>
				<div class="cookie__buttons">
					<NuxtLink class="button-secondary w-full">Accept</NuxtLink>
					<NuxtLink class="button-transparent w-full">Settings</NuxtLink>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup></script>
