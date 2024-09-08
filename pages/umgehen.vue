<script setup lang="ts">
useSeoMeta({
	title: 'CUII Liste - Sperre einfach umgehen',
	ogTitle: 'CuiiListe.de - Sperre einfach umgehen'
})

let referer = useRequestHeaders(["Referer"]).referer
if (referer && (new URL(referer)).hostname.startsWith("filmpalast")) {
	navigateTo("/filmpalast")
}

let recommendedConfigs = ref<string[]>([])

const device = useDevice()
if (device.isFirefox && device.isDesktop) {
	recommendedConfigs.value.push("Firefox")
}
if (device.isChrome && device.isDesktop) {
	recommendedConfigs.value.push("Chrome")
}
if (device.isEdge && device.isDesktop) {
	recommendedConfigs.value.push("Edge")
}
if (device.isChrome && device.isMobile) {
	recommendedConfigs.value.push("Chrome Mobile")
}
if (device.isWindows) {
	recommendedConfigs.value.push("Windows")
}
if (device.isAndroid) {
	recommendedConfigs.value.push("Android")
}
if (device.isIos) {
	recommendedConfigs.value.push("iOS")
}
if (device.isMacOS) {
	recommendedConfigs.value.push("MacOS")
}
if (device.userAgent.includes("Linux") && !device.isMobileOrTablet) {
	recommendedConfigs.value.push("Linux")
}

</script>

<template>
	<div class="w-full mb-4">
		<h1 class="text-4xl font-bold">Zensur umgehen</h1>
		<p class="mt-5">
			Du musst <b>nur eine</b> der folgenden Anleitungen befolgen, um die Zensur zu umgehen.
			<br>
			Wenn du detailiertere Informationen möchtest, worum es geht, kannst du weiter unten nachlesen.
		</p>
		<div class="flex flex-row items-center mt-5 w-full">
			<div class="w-full">
				<div class="text-2xl font-bold" v-if="recommendedConfigs.length > 0">Empfohlen</div>
				<div class="grid grid-cols-1 gap-2 w-full mt-4">
					<div v-if="recommendedConfigs.includes('Chrome')">
						<BypassInstructionChrome is-recommended />
					</div>
					<div v-if="recommendedConfigs.includes('Firefox')">
						<BypassInstructionFirefox is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Edge')">
						<BypassInstructionEdge is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Windows')">
						<BypassInstructionWindows is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Chrome Mobile')">
						<BypassInstructionChromeMobile is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Android')">
						<BypassInstructionAndroid is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('iOS')">
						<BypassInstructionIos is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('MacOS')">
						<BypassInstructionMacOS is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Linux')">
						<BypassInstructionLinux is-recommended/>
					</div>
					<div v-if="recommendedConfigs.includes('Fritzbox')">
						<BypassInstructionFritzbox is-recommended/>
					</div>
				</div>
				<div class="text-2xl font-bold mt-5" v-if="recommendedConfigs.length > 0">Andere</div>
				<div class="grid grid-cols-1 gap-2 w-full mt-4">
					<div v-if="!recommendedConfigs.includes('Chrome')">
						<BypassInstructionChrome />
					</div>
					<div v-if="!recommendedConfigs.includes('Firefox')">
						<BypassInstructionFirefox />
					</div>
					<div v-if="!recommendedConfigs.includes('Edge')">
						<BypassInstructionEdge />
					</div>
					<div v-if="!recommendedConfigs.includes('Windows')">
						<BypassInstructionWindows />
					</div>
					<div v-if="!recommendedConfigs.includes('Chrome Mobile')">
						<BypassInstructionChromeMobile />
					</div>
					<div v-if="!recommendedConfigs.includes('Android')">
						<BypassInstructionAndroid />
					</div>
					<div v-if="!recommendedConfigs.includes('iOS')">
						<BypassInstructionIos />
					</div>
					<div v-if="!recommendedConfigs.includes('MacOS')">
						<BypassInstructionMacOS />
					</div>
					<div v-if="!recommendedConfigs.includes('Linux')">
						<BypassInstructionLinux />
					</div>
					<div v-if="!recommendedConfigs.includes('Fritzbox')">
						<BypassInstructionFritzbox />
					</div>
				</div>
			</div>
		</div>
		<h1 class="text-2xl font-bold mt-8">
			Detallierte Erklärung, worum es geht
		</h1>
		<p class="mt-5">
			Damit euer PC weiß, wie er z.B. google.com kontaktieren kann, fragt er einen sogenannten DNS-Server.
			Dieser Server gibt ihm dann die IP-Adresse von google.com zurück, wodurch euer PC weiß, wohin er die Anfrage schicken muss.
			Internetanbieter haben eigene DNS-Server, die sie ihren Kunden zur Verfügung stellen.
			Wenn ihr also bei Vodafone seid, und euer PC wissen möchte, wo google.com ist, fragt er den Vodafone-DNS-Server "Hey, wo ist google.com?"
			und der Vodafone-DNS-Server antwortet ihm dann "google.com ist unter der IP-Adresse so-und-so erreichtbar".
			<br>
			Wenn die CUII sich jetzt entscheidet, dass google.com gesperrt werden soll, dann kann der Vodafone-DNS-Server einfach sagen "google.com gibt es nicht".
			<br>
			Wenn ihr jetzt aber einen anderen DNS-Server benutzt, z.B. den von Quad9 oder Cloudflare, dann fragt euer PC
			nicht mehr bei der Vodafone nach, sondern bei Quad9 oder Cloudflare.
			<br>
			Wir empfehlen sehr Quad9 oder andere DNS-Server, die stark auf Datenschutz achten.
			Unsere Anleitungen enthalten oft Cloudflare, da diese dank Apps oft
			<span class="tooltip underline decoration-dotted"
			     data-tip="Android ist leider oft unterschiedlich, und bei iOS kann man es nur für jedes WLAN einzeln einstellen.">
				einfacher
		     </span>
			zu konfigurieren sind.
			<br>
			Wenn du mehr Zeit hast, empfehlen wir <a href="https://www.quad9.net/" target="_blank" class="link">Quad9</a>.
			Mehr über <a href="https://de.wikipedia.org/wiki/Domain_Name_System" target="_blank" class="link">DNS</a> könnt ihr auf Wikipedia nachlesen.
		</p>
	</div>
	<img src="https://fritz.box/typo3conf/ext/avm/Resources/Public/Images/logo.svg" width="1" height="1" @error="() => recommendedConfigs.push('Fritzbox')" />
</template>

<style scoped>

</style>