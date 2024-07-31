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
		<div class="collapse-title text-xl font-medium">Chrome Mobile</div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne Chrome </p>
			<p><count>2.</count> Klicke auf die drei Punkte oben rechts und wähle "Einstellungen".</p>
			<NuxtImg src="/img/bypass/chromeMobile1.png" alt="Chrome Einstellungen" height="600" />
			<p><count>3.</count> Wähle "Datenschutz & Sicherheit" aus.</p>
			<NuxtImg src="/img/bypass/chromeMobile2.png" alt="Datenschutz & Sicherheit" height="600" />
			<p><count>4.</count> Scrolle nach unten und wähle "Sicheres DNS verwenden" aus.</p>
			<NuxtImg src="/img/bypass/chromeMobile3.png" alt="Sicheres DNS" height="600" />
			<p><count>5.</count> Schalte "Sicheres DNS verwenden" ein und wähle einen anderen Anbieter aus. Wir empfehlen "Cloudflare (1.1.1.1)</p>
			<NuxtImg src="/img/bypass/chromeMobile4.png" alt="Sicheres DNS" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>