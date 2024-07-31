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
		<div class="collapse-title text-xl font-medium">iOS <span v-if="isRecommended" class="text-accent">(Einfach)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Lade die App "1.1.1.1: Faster Internet" aus dem
				<a href="https://apps.apple.com/de/app/1-1-1-1-faster-internet/id1423538627" class="text-primary" target="_blank" rel="noopener">App Store</a>
				herunter.
			</p>
			<NuxtImg src="/img/bypass/ios1.png" alt="1.1.1.1 runterladen" width="300" />
			<p><count>2.</count> Öffne die App, klicke dich kurz durch die Einführung. Installie das VPN-Profil.</p>
			<p><count>3.</count> Lege den Schalter um, um WARP zu aktivieren. Das war's!</p>
			<NuxtImg src="/img/bypass/ios2.png" alt="WARP aktivieren" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>