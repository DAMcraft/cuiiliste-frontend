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
		<div class="collapse-title text-xl font-medium flex items-center"><Icon name="mingcute:edge-fill" class="mr-2" />
			Edge <span v-if="isRecommended" class="text-accent">(Einfach)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne Edge</p>
			<p><count>2.</count> Klicke auf die drei Punkte oben rechts und wähle "Einstellungen".</p>
			<NuxtImg src="/img/bypass/edge1.png" alt="Edge Einstellungen" width="300" />
			<p><count>3.</count> Wähle "Datenschutz, Suche und Dienste" aus.</p>
			<NuxtImg src="/img/bypass/edge2.png" alt="Datenschutz, Suche und Dienste" width="300" />
			<p>
				<count>4.</count> Scrolle nach unten bis zu "Sicherheit", schalte "Sicheres DNS" ein und wähle einen eigenen Anbieter aus.
				Wir empfehlen "Cloudflare (1.1.1.1)".
			</p>
			<NuxtImg src="/img/bypass/edge3.png" alt="Sicheres DNS" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>