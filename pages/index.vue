<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

let blockedDomains = ref(0)
async function getBlockedDomains() {
  const res = await fetch(useRuntimeConfig().public.api_root + '/blocked_domains')
  const data = await res.json()
  blockedDomains.value = data.length
}
onMounted(() => {
  getBlockedDomains()
})
</script>

<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
	<div class="bg-base-300 shadow-lg p-4">
		<div class="bg-cuii-banner-background bg-cover bg-center h-64 mb-1">
			<div class="flex flex-col items-center justify-center h-full text-center p-2">
				<div class="text-white text-2xl font-bold">Diese Webseite ist aus urheberrechtlichen Gründen nicht verfügbar.</div>
				<div class="text-white">Die CUII hat entschieden, diese Seite ohne gerichtlichen Beschluss zu sperren.</div>
			</div>
		</div>
		<h2 class="text-2xl font-bold">
			Selbstjustiz? Nein danke!
		</h2>
		<p>
			Die CUII ist eine private Organisation, die sich selbst das Recht nimmt, Webseiten zu sperren, die ihrer Meinung nach gegen das Urheberrecht verstoßen.
			Dies geschieht ohne gerichtliche Beschlüsse - und Internetanbieter ziehen mit.
		</p>
	</div>

	<div class="bg-base-300 shadow-lg p-4 flex flex-col justify-between">
		<div>
			<h2 class="text-2xl font-bold">
				"Transparente" Sperrliste
			</h2>
			<p class="mt-2">
				Die CUII sperrt Domains. Welche genau? Das wird von der CUII nicht preisgegeben.
			</p>
			<p>
				Aber keine Sorge - <b>dafür gibt es ja uns</b>.
				Wir geben unser Bestes, um alle gesperrten Domains zu sammeln und zu veröffentlichen.
			</p>
		</div>
		<div class="mx-2 bottom-0 align-bottom">
			<NuxtImg src="/img/nicht_genannt.png" class="w-full" />
			<p class="text-[--lessimportant] italic">
				Zitat aus Anlage 1 §4 Abs. 4 lit. des
				<a class="text-primary" href="https://cuii.info/fileadmin/files/CUII_Verhaltenskodex_23.pdf" target="_blank">CUII-Verhaltenskodex</a>
				<br class="hidden sm:block" />
				SUW = Strukturell urheberrechtsverletzende Webseite
			</p>
		</div>
	</div>
	<div class="bg-base-300 shadow-lg p-4 flex flex-col">
		<h2 class="text-2xl font-bold">
			Hier könnte Ihre Werbung stehen
		</h2>
		<p>
			Wir wollen die Sperrpraxis der CUII transparent machen und die Meinungsfreiheit im Internet schützen.
			Wir sind für eine Welt, in der das Internet frei und offen ist - und nicht von privaten Organisationen zensiert wird.
		</p>
	</div>
	<div class="flex flex-col justify-between">
		<NuxtLink class="bg-primary shadow-lg p-4 flex hover:bg-primary-hover mb-2" to="/umgehen">
			<Icon name="eos-icons:dns" class="text-white text-6xl" />
			<div class="flex flex-col ml-4">
				<h2 class="text-white text-2xl font-bold">
					Zensur umgehen
				</h2>
				<p class="text-white">
					Wir zeigen Ihnen wie Sie <b>ganz einfach</b> die Selbstjustiz der CUII umgehen können.
				</p>
			</div>
			<Icon name="mdi:arrow-right" class="text-white text-6xl ml-auto" />
		</NuxtLink>
		<NuxtLink class="bg-accent shadow-lg p-4 flex hover:bg-primary-hover mt-2" to="/domains">
			<Icon name="octicon:blocked-16" class="text-white text-6xl" />
			<div class="flex flex-col ml-4">
				<h2 class="text-white text-2xl font-bold">
					Gesperrte Domains
				</h2>
				<p class="text-white">
					Die CUII hat im Moment <b>{{ blockedDomains }}</b> Domains gesperrt. Schau dir die Liste an!
				</p>
			</div>
			<Icon name="mdi:arrow-right" class="text-white text-6xl ml-auto" />
		</NuxtLink>
	</div>
</div>
</template>

<style scoped>

</style>