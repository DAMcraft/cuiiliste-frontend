<script setup lang="ts">
import ResolverStatus from "~/components/resolverStatus.vue";

definePageMeta({
  layout: 'default'
})

const blockingResolvers = ref([])
const nonBlockingResolvers = ref([])

async function getResolverStatus() {
	let resolvers = await (await fetch(useRuntimeConfig().public.api_root + '/resolvers')).json()
	// this will look something like this:
	// [{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Cloudflare"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Freifunk Regensburg"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 4/4"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"GCore"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 2/4"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telekom","ping":135,"resolver":"Telekom 1/4"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"NextDNS"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Freifunk M\u00fcnchen"},{"health":"REACHABLE","obeys_cuii":true,"isp":"1&1","ping":134,"resolver":"1&1 (West)"},...]
	let blockingResolvers = resolvers.filter((resolver: any) => resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
	let nonBlockingResolvers = resolvers.filter((resolver: any) => !resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
	return { blockingResolvers, nonBlockingResolvers }
}
getResolverStatus().then((res) => {
	blockingResolvers.value = res.blockingResolvers
	nonBlockingResolvers.value = res.nonBlockingResolvers
})


</script>

<template>
	<div class="flex flex-col items-start">
		<h1 class="text-3xl font-bold pb-2">DNS Resolver</h1>
		<p class="2xl:w-3/5">
			Um herauszufinden, ob ein Internetanbieter eine Webseite blockiert, nutzen wir verschiedene DNS-Resolver.
			Unten kannst du sehen, wie es denen gerade so geht. Ein grüner Haken bedeutet ganz einfach, dass der Resolver erreichbar ist und auf Anfragen antwortet.
			<br>
			Lustige Info nebenbei: Vodafone und Telefónica (aka o2) erlauben leider keinen Zugriff von außen auf ihre DNS-Resolver.
			Daher nutzen wir bei denen die DNS-Resolver von irgendwelchen Leuten, die ihren Port 53 offen haben,
			bei dem jeweiligen Internetanbieter sind und die DNS-Anfragen auch an diesen weiterleiten.
			Diesen DNS-Resolvern haben wir eher wenig bedeutende Namen gegeben. Die anderen Resolver werden von den Internetanbietern selbst benannt.
		</p>

		<div class="flex flex-col pt-3">
			<div class="flex-1 flex flex-col">
				<h2 class="text-xl font-bold pb-1">Blocking</h2>
				<p>
					Diese DNS-Resolver gehören zu Internetanbietern, die CUII-Mitglieder sind. Sie blockieren Zugriffe auf Webseiten, die in der CUII-Blacklist stehen.
				</p>
				<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" v-if="blockingResolvers.length > 0">
					<ResolverStatus class="md:px-3" v-for="resolver in blockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
				</div>
				<div class="text-center" v-else>
					<span class="loading loading-spinner w-[4rem] text-[--lessimportant]"></span>
				</div>
			</div>
			<div class="flex-1 flex flex-col">
				<h2 class="text-xl font-bold pb-1">Non-Blocking</h2>
				<p>
					Diese DNS-Resolver sind unabhängig von Internetanbietern und blockieren keine Webseiten auf Sperrempfehlungen der CUII.
				</p>
				<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" v-if="nonBlockingResolvers.length > 0">
					<ResolverStatus class="md:px-3" v-for="resolver in nonBlockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
				</div>
				<div class="text-center" v-else>
					<span class="loading loading-spinner w-[4rem] text-[--lessimportant]"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>