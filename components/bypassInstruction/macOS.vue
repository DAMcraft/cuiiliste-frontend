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
		<div class="collapse-title text-xl font-medium">MacOS</div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffnen Sie die Übersicht Ihrer Programme im Finder und starten Sie die App "Systemeinstellungen".</p>
			<p><count>2.</count> Wählen Sie nun in der Mitte "Netzwerk" aus.</p>
			<p><count>3.</count> Klicken Sie am linken Rand auf die Netzwerkverbindung, die Sie verwenden, zum Beispiel Ihre
				WLAN-Verbindung. Aktive Verbindungen erkennen Sie an dem grünen Punkt.</p>
			<p><count>4.</count> Öffnen Sie jetzt rechts unten die "weiteren Optionen". Hier können Sie Änderungen an Ihrer aktuellen Netzwerkverbindung vornehmen.</p>
			<p><count>5.</count> Oben finden Sie den Reiter "DNS" (s. Bild). Hier können Sie eigene DNS-Server hinzufügen oder wieder löschen. Füge die DNS-Server "9.9.9.9" und "1.1.1.1" hinzu.</p>
		</div>
	</div>
</template>

<style scoped>

</style>