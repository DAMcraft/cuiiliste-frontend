<script setup lang="ts">

const props = defineProps({
	isRecommended: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="collapse collapse-plus bg-base-200 mx-auto">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium">Android <span v-if="isRecommended" class="text-accent">(Einfach)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Lade die App "1.1.1.1 + WARP: Safer Internet" aus dem
				<a href="https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone" class="text-primary" target="_blank" rel="noopener">Play Store</a>
				herunter.
			</p>
			<NuxtImg src="/img/bypass/android1.png" alt="1.1.1.1 runterladen" width="300" />
			<p><count>2.</count> Öffne die App, klicke dich kurz durch die Einführung. Installie ggfs. das VPN-Profil.</p>
			<p><count>3.</count> Lege den Schalter um, um WARP zu aktivieren. Das war's!</p>
			<NuxtImg src="/img/bypass/android2.png" alt="WARP aktivieren" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>