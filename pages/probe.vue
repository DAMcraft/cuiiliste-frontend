<script setup lang="ts">
useSeoMeta({
	title: 'CUII Liste - Domain hinzufügen',
	ogTitle: 'CuiiListe.de - Domain hinzufügen'
})

definePageMeta({
	layout: 'default'
})

let isSearching = ref(false)
let hasResult = ref(false)
let finalResultText = ref('')
let domainToCheck = ''
let blockingResolvers: any[] = []
let nonBlockingResolvers: any[] = []
let hasInput = ref(true)

const testDomain = async () => {
	hasInput.value = true
	hasResult.value = false
	domainToCheck = (document.getElementById('testDomainInput') as HTMLInputElement).value.trim()
	if (domainToCheck === '') {
		hasInput.value = false
		return
	}
	isSearching.value = true
	const res = await fetch(useRuntimeConfig().public.api_root + '/test_domain?domain=' + domainToCheck)
	const data = await res.json()
	// this will look something like this:
	// {"domain":"kinox.to","final_result":"BLOCKED","responses":[{"duration":306,"obeys_cuii":false,"resolver":"Cloudflare","response":"NOT_BLOCKED"},{"duration":306,"obeys_cuii":false,"resolver":"Freifunk Regensburg","response":"NOT_BLOCKED"},{"duration":306,"obeys_cuii":true,"resolver":"Telef\u00f3nica (02) 4/4","response":"BLOCKED"}, ...]}
	isSearching.value = false
	hasResult.value = true
	let finalDomainResult = data.final_result  // one of ["NOT_BLOCKED", "PARTIALLY_BLOCKED", "BLOCKED", "FAKE_BLOCKED", "ERROR", "NXDOMAIN"]
	domainToCheck = data.domain  // in case the domain was normalized
	let responses = data.responses
	blockingResolvers = responses.filter((resolver: any) => resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
	nonBlockingResolvers = responses.filter((resolver: any) => !resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
	finalResultText = finalDomainResult
}
</script>

<template>
	<div class="flex flex-col sm:items-center items-start">
		<h1 class="text-4xl font-bold">Domain hinzufügen</h1>
		<p class="text-lg sm:w-3/4 sm:text-center mt-2">Teste, welche Internetanbieter eine Domain blockieren (und füge diese unserer Liste hinzu falls diese neu ist)</p>
		<div class="flex flex-row items-center mt-5">
			<input type="text" placeholder="kinox.to" class="input input-bordered w-full max-w-xs m-5 placeholder-[--lessimportant]" id="testDomainInput" @keyup.enter="testDomain" :disabled="isSearching">
			<button class="btn btn-accent" id="testDomainButton" @click="testDomain" :disabled="isSearching">Testen</button>
		</div>
		<div v-if="!hasInput" class="text-error">Bitte gib eine Domain ein.</div>
		<span class="loading loading-spinner loading-lg text-accent" id="loadingSpinner" :class="isSearching ? '' : 'hidden'"></span>
		<div id="resultDiv" :class="hasResult ? '' : 'hidden'">
			<div class="text-2xl font-bold">
				<span v-if="finalResultText === 'BLOCKED'">
					"{{ domainToCheck }}" wurde durch die CUII <span class="text-accent">blockiert</span>.
				</span>
				<span v-else-if="finalResultText === 'PARTIALLY_BLOCKED'">
					"{{ domainToCheck }}" ist <span class="text-accent">teilweise blockiert</span>.
				</span>
				<span v-else-if="finalResultText === 'NOT_BLOCKED'">
					"{{ domainToCheck }}" ist ganz normal <span class="text-success">erreichbar</span>.
				</span>
				<span v-else-if="finalResultText === 'FAKE_BLOCKED'">
					Irgendein Schlingel dachte, es wäre lustig, so zu tun als wäre {{ domainToCheck }} blockiert. <span class="text-success">Ist es aber nicht.</span>
				</span>
				<span v-else-if="finalResultText === 'ERROR'">
					Es gab einen Fehler beim Testen der Domain "{{ domainToCheck }}". <span class="text-error">Bitte versuche es später erneut.</span>
				</span>
				<span v-else-if="finalResultText === 'NXDOMAIN'">
					Die Domain "{{ domainToCheck }}" konnte <span class="text-[--lessimportant]">nicht aufgelöst</span> werden.
				</span>
			</div>
			<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" id="blockingResolvers">
				<ResolverResponse v-for="resolver in blockingResolvers" :name="resolver.resolver" :response="resolver.response" :ping="resolver.duration" :key="resolver.resolver" />
			</div>
			<div class="text-2xl font-bold">Von der CUII-Unabhängige resolver:</div>
			<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" id="nonBlockingResolvers">
				<ResolverResponse v-for="resolver in nonBlockingResolvers" :name="resolver.resolver" :response="resolver.response" :ping="resolver.duration" :key="resolver.resolver" />
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>