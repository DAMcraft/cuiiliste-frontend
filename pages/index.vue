<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
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
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="bg-base-300 shadow-lg p-4">
			<div class="bg-cuii-banner-background bg-cover bg-center h-64 mb-1">
				<div class="flex flex-col items-center justify-center h-full text-center p-2">
					<div class="text-white text-2xl font-bold">Diese Webseite ist aus urheberrechtlichen Gründen nicht
						verfügbar.
					</div>
					<div class="text-white">Die CUII hat entschieden, diese Seite ohne gerichtlichen Beschluss zu
						sperren.
					</div>
				</div>
			</div>
			<h2 class="text-2xl font-bold">
				Selbstjustiz? Nein danke!
			</h2>
			<p>
				Die CUII ist eine private Organisation, die sich selbst das Recht nimmt, Webseiten zu sperren, die ihrer
				Meinung nach gegen das Urheberrecht verstoßen.
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
				<NuxtImg src="/img/nicht_genannt.webp" class="w-full"/>
				<p class="text-[--lessimportant] italic">
					Zitat aus Anlage 1 §4 Abs. 4 lit. l des
					<a class="link" href="https://cuii.info/fileadmin/files/CUII_Verhaltenskodex_23.pdf"
					   target="_blank">CUII-Verhaltenskodex</a>
					<br class="hidden sm:block"/>
					SUW = Strukturell urheberrechtsverletzende Webseite
				</p>
			</div>
		</div>
		<div class="bg-base-300 shadow-lg p-4 flex flex-col">
			<h2 class="text-2xl font-bold">
				Unsere Ziele
			</h2>
			<ul class="list-disc ml-6 mt-2">
				<li>
					<b>Transparenz:</b> Wir wollen die Sperrpraxis der CUII transparent machen.
				</li>
				<li>
					<b>Meinungsfreiheit:</b> Wir wollen die Meinungsfreiheit im Internet schützen.
				</li>
				<li>
					<b>Freies Internet:</b> Wir sind für eine Welt, in der das Internet frei und offen ist.
				</li>
				<li>
					<b>Keine Zensur:</b> Wir sind gegen Zensur durch private Organisationen.
				</li>
			</ul>
		</div>
		<div class="flex flex-col justify-between">
			<NuxtLink class="bg-primary shadow-lg p-4 flex hover:bg-primary-hover mb-2 hover:shadow-xl" to="/umgehen">
				<Icon name="eos-icons:dns" class="text-white text-6xl"/>
				<div class="flex flex-col ml-4">
					<h2 class="text-white text-2xl font-bold">
						Zensur umgehen
					</h2>
					<p class="text-white">
						Wir zeigen Ihnen wie Sie <b>ganz einfach</b> die Selbstjustiz der CUII umgehen können.
					</p>
				</div>
				<Icon name="mdi:arrow-right" class="text-white text-6xl ml-auto"/>
			</NuxtLink>
			<NuxtLink class="bg-accent shadow-lg p-4 flex hover:bg-primary-hover mt-2 hover:shadow-xl" to="/domains">
				<Icon name="octicon:blocked-16" class="text-white text-6xl"/>
				<div class="flex flex-col ml-4">
					<h2 class="text-white text-2xl font-bold">
						Gesperrte Domains
					</h2>
					<p class="text-white">
						Die CUII hat im Moment <b>{{ blockedDomains }}</b> Domains gesperrt. Schau dir die Liste an!
					</p>
				</div>
				<Icon name="mdi:arrow-right" class="text-white text-6xl ml-auto"/>
			</NuxtLink>
		</div>
		<div class="flex flex-row justify-between">
			<div class="bg-base-300 shadow-lg w-1/2 flex mr-1 sm:mr-2 p-2 sm:p-4">
				<div class="flex flex-col">
					<h2 class="text-2xl font-bold">
						Discord
					</h2>
					<p>
						Tritt unserem Discord-Server bei um Benachrichtigungen zu erhalten oder Informationen auszutauschen.
					</p>
					<a class="bg-primary text-white py-3 px-5 m-auto rounded-lg flex items-center gap-2 hover:bg-primary-hover mt-2"
					   :href="useRuntimeConfig().public.discord_invite">
						<span class="mr-2">Beitreten</span>
						<Icon name="pajamas:discord" class="text-white text-2xl"/>
					</a>
					<p class="text-xs mx-auto text-[--lessimportant] italic">
						Matrix bridge coming soon™
					</p>
				</div>
			</div>
			<div class="bg-base-300 shadow-lg w-1/2 flex ml-1 sm:ml-2 p-2 sm:p-4">
				<div class="flex flex-col">
					<h2 class="text-2xl font-bold">
						Über uns
					</h2>
					<p>
						Erfahre mehr über uns, unsere Ziele und wie diese Webseite funzt.
					</p>
					<NuxtLink class="bg-base-100 p-3 px-5 m-auto rounded-lg flex items-center gap-2 hover:bg-primary-hover mt-2"
					          to="/about">
						<span class="mr-2">Mehr erfahren</span>
						<Icon name="mdi:arrow-right" class="text-2xl"/>
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="bg-base-300 shadow-lg p-4 flex hidden">
			<Icon name="mdi:heart" class="text-9xl hidden sm:block"/>
			<div class="flex flex-col ml-4">
				<h2 class="text-2xl font-bold">
					Uns unterstützen
				</h2>
				<p>
					Wir arbeiten mit viel Liebe und Zeit an dieser Webseite. Die Seite ist komplett werbefrei und wir verdienen
					kein Geld damit. Wenn Sie uns unterstützen möchten, können Sie uns gerne eine Spende zukommen lassen.
				</p>
				<div class="flex gap-4 mt-2">
					<div class="bg-base-100 p-2 rounded-lg flex items-center gap-2 hover:bg-base-200 hover:cursor-pointer"
					     onclick="bitcoin_modal.showModal()">
						<Icon name="mdi:bitcoin" class="text-2xl"/>
						Bitcoin
					</div>
					<div class="bg-base-100 p-2 rounded-lg flex items-center gap-2 hover:bg-base-200 hover:cursor-pointer"
					     onclick="monero_modal.showModal()">
						<Icon name="mingcute:monero-fill" class="text-2xl"/>
						Monero
					</div>
					<NuxtLink class="bg-base-100 p-2 rounded-lg flex items-center gap-2 hover:bg-base-200 hover:cursor-pointer"
					   :to="useRuntimeConfig().public.paypal_donate_url"
					   target="_blank" rel="noopener noreferrer">
						<Icon name="mdi:paypal" class="text-2xl"/>
						PayPal
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
	<dialog id="bitcoin_modal" class="modal">
		<div class="modal-box">
			<h3 class="text-lg font-bold">Vielen Dank, dass Sie überhaupt über eine Spende nachdenken! Es bedeutet uns
				viel.</h3>
			<p class="py-4">
				Falls Sie uns über Bitcoin unterstützen möchten, können Sie dies über folgende Adresse tun:
				<br>
				<code class="font-mono text-accent px-1.5 rounded-lg break-all bg-base-200">
					{{ useRuntimeConfig().public.bitcoin_address }}
				</code>
				<QrcodeVue :value="'bitcoin:' + useRuntimeConfig().public.bitcoin_address" :size="200" class="mx-auto mt-2"/>
			</p>
			<div class="modal-action">
				<form method="dialog">
					<button class="btn">Schließen</button>
				</form>
			</div>
		</div>
	</dialog>
	<dialog id="monero_modal" class="modal">
		<div class="modal-box">
			<h3 class="text-lg font-bold">Vielen Dank, dass Sie überhaupt über eine Spende nachdenken! Es bedeutet uns
				viel.</h3>
			<p class="py-4">
				Falls Sie uns über Monero (XMR) unterstützen möchten, können Sie dies über folgende Adresse tun:
				<br>
				<code class="font-mono text-accent px-1.5 rounded-lg break-all bg-base-200">
					{{ useRuntimeConfig().public.monero_address }}
				</code>
				<QrcodeVue :value="'monero:' + useRuntimeConfig().public.monero_address" :size="200" class="mx-auto mt-2"/>
			</p>
			<div class="modal-action">
				<form method="dialog">
					<button class="btn">Schließen</button>
				</form>
			</div>
		</div>
	</dialog>
</template>

<style scoped>

</style>