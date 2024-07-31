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
		<div class="collapse-title text-xl font-medium">Windows</div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne die Windows Einstellungen</p>
			<p><count>2.</count> Klicke auf "Netzwerk & Internet"</p>
			<NuxtImg src="/img/bypass/windows1.png" alt="Windows Einstellungen" width="300" />
			<p><count>3.</count> Geh auf "WLAN" bzw. "Ethernet"</p>
			<NuxtImg src="/img/bypass/windows2.png" alt="Windows WLAN" width="300" />
			<p><count>4.</count> (Nur bei WLAN: Geh auf "Hardwareeigenschaften")</p>
			<NuxtImg src="/img/bypass/windows3.png" alt="Windows WLAN Netzwerk" width="300" />
			<p><count>5.</count> Wähle "Bearbeiten" bei "DNS-Serverzuweisung" aus</p>
			<NuxtImg src="/img/bypass/windows4.png" alt="Windows DNS-Serverzuweisung" width="300" />
			<p><count>6.</count> Wähle "Manuell" aus, schalte IPv4 ein, und trage "9.9.9.9" und "1.1.1.1" ein</p>
			<NuxtImg src="/img/bypass/windows5.png" alt="Windows DNS-Serverzuweisung" width="300" />
			<p><count>7.</count> Speichere die Einstellungen</p>
		</div>
	</div>
</template>

<style scoped>

</style>