<script setup lang="ts">
const affectedASNs = [
	8881,  // 1&1 Versatel
	6805,  // Telefonica
	3320,  // Deutsche Telekom
	3209,  // Vodafone
	5430,  // Freenet
	60294  // Deutsche Glasfaser Wholesale
]

let affected = ref<boolean | null>(null)

async function amIAffected() {
	let randomID = Math.floor(Math.random() * 1000000000)
	let url = `https://${randomID}.map.help.every1dns.net/`
	let response = await (await fetch(url)).json()
	let asn = response.isp.asn
	return affectedASNs.includes(asn)
}
// async function amIAffected() {
// 	let url = `http://ww1.kinox.to/`
// 	// Idea behind this: If the request doesn't fail, then they got redirected to the notice page
// 	try {
// 		await fetch(url, {mode: 'no-cors', method: 'HEAD'})
// 		affected.value = true
// 	} catch (e) {
// 		affected.value = false
// 	}
// }

amIAffected().then((res) => {
	affected.value = res
})
</script>

<template>
	<div v-if="affected === null" class="text-center">
		<span class="loading loading-spinner w-[4rem] text-accent"></span>
	</div>
	<div v-else>
		<div v-if="affected" class="text-center">
			<div>
				<Icon name="uil:ban" class="text-error text-9xl"/>
			</div>
			<span class="text-3xl">Du bist leider von <span class="text-accent font-bold">CUII</span>-Sperren <span
				class="text-error">betroffen</span>!</span>
			<div class="mt-5 text-lg">
				Keine Sorge, die zu Umgehen ist ganz einfach.
				<NuxtLink href="/umgehen" class="text-primary">Hier</NuxtLink>
				findest du eine Anleitung.
			</div>
		</div>
		<div v-else class="text-center text-3xl">
			<div>
				<Icon name="uil:check" class="text-success text-9xl"/>
			</div>
			Alles perfekt! Du bist von <span class="text-accent font-bold">CUII</span>-Sperren <span
			class="text-success">nicht betroffen</span>.
		</div>

		<div class="align-bottom text-center mt-10">
			<div class="text-2xl">
				<span class="text-accent font-bold">CUII</span>-Mitglieder:
			</div>
			<div class="flex justify-center mt-2">
				<div class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-4">
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/4/2/csm_1und1_neu_square_405bafe5db.png" name="1&1 Versatel"/>
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/6/7/csm_dtglasfaser_square_137fe109e3.png" name="Deutsche Glasfaser"/>
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/5/e/csm_freenet_square_92227a7b92.png" name='"Free"net'/>
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/5/8/csm_telefonica_square_0e76f3001e.png" name="Telefónica (o2)" should-invert-dark/>
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/f/b/csm_Telekom_square_498b38203f.png" name="Telekom"/>
					<CuiiMember logo-link="https://cuii.info/fileadmin/_processed_/a/f/csm_vodafone_square_c1925fab9d.png" name="Vodafone"/>
				</div>
			</div>
			<div class="mt-5 text-lg">
				Sie blockieren Websiten, <span class="font-bold">ohne Richterliche Anordnung</span>,
				aufgrund von Empfehlungen der CUII.
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>