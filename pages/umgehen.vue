<script setup lang="ts">
import {NuxtImg} from "#components";

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
	<div class="w-full">
		<h1 class="text-4xl font-bold">Zensur umgehen</h1>
		<p class="mt-5">Du musst <b>nur eine</b> der folgenden Anleitungen befolgen, um die Zensur zu umgehen.</p>
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
	</div>
	<img src="https://fritz.box/typo3conf/ext/avm/Resources/Public/Images/logo.svg" width="1" height="1" @error="() => recommendedConfigs.push('Fritzbox')" />
</template>

<style scoped>

</style>