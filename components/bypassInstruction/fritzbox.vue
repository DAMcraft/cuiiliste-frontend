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
		<div class="collapse-title text-xl font-medium">Fritzbox <span v-if="isRecommended" class="text-accent">(Gilt für alle im Netzwerk)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne <a href="http://192.168.178.1" target="_blank" class="text-accent">http://fritz.box</a></p>
			<p><count>2.</count> Melde dich an</p>
			<NuxtImg src="/img/bypass/fritzbox1.png" alt="Fritzbox Anmeldung" width="600" />
			<p><count>3.</count> Gehe auf "Internet" und dann auf "Zugangsdaten"</p>
			<NuxtImg src="/img/bypass/fritzbox2.png" alt="Fritzbox Internet Zugangsdaten" height="600" />
			<p><count>4.</count> Wähle "DNS-Server" aus</p>
			<NuxtImg src="/img/bypass/fritzbox3.png" alt="Fritzbox DNS-Server" width="600" />
			<p>
				<count>5.</count> Stelle bei DNSv4 auf "Andere DNSv4-Server verwenden" um und trage "9.9.9.9" und "1.1.1.1" ein.
				Bei DNSv6 auf "Andere DNSv6-Server verwenden" und trage "2620:fe::fe" und "2606:4700:4700::1111" ein
			</p>
			<NuxtImg src="/img/bypass/fritzbox4.png" alt="Fritzbox DNS-Server" width="600" />
			<p><count>6.</count> Speichere die Einstellungen</p>
		</div>
	</div>
</template>

<style scoped>

</style>