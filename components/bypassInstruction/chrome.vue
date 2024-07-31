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
		<div class="collapse-title text-xl font-medium">Chrome <span v-if="isRecommended" class="text-accent">(Einfach)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne Chrome </p>
			<p><count>2.</count> Klicke auf die drei Punkte oben rechts und wähle "Einstellungen".</p>
			<NuxtImg src="/img/bypass/chrome1.png" alt="Chrome Einstellungen" width="300" />
			<p><count>3.</count> Wähle "Datenschutz & Sicherheit" aus und klicke auf "Sicherheit".</p>
			<NuxtImg src="/img/bypass/chrome2.png" alt="Datenschutz & Sicherheit" width="300" />
			<p><count>4.</count> Scrolle nach unten, schalte "Sicheres DNS" ein und wähle als Anbieter "Cloudflare (1.1.1.1)" aus.</p>
			<NuxtImg src="/img/bypass/chrome3.png" alt="Sicheres DNS" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>