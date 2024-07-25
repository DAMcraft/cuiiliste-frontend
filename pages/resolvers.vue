<script setup lang="ts">
import ResolverStatus from "~/components/resolverStatus.vue";

definePageMeta({
  layout: 'default'
})

let resolvers = await (await fetch(useRuntimeConfig().public.api_root + '/resolvers')).json()
// this will look something like this:
// [{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Cloudflare"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Freifunk Regensburg"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 4/4"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"GCore"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 2/4"},{"health":"REACHABLE","obeys_cuii":true,"isp":"Telekom","ping":135,"resolver":"Telekom 1/4"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"NextDNS"},{"health":"REACHABLE","obeys_cuii":false,"isp":null,"ping":134,"resolver":"Freifunk M\u00fcnchen"},{"health":"REACHABLE","obeys_cuii":true,"isp":"1&1","ping":134,"resolver":"1&1 (West)"},...]
let blockingResolvers = resolvers.filter((resolver: any) => resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
let nonBlockingResolvers = resolvers.filter((resolver: any) => !resolver.obeys_cuii).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
</script>

<template>
	<h1 class="text-3xl font-bold pb-2">DNS Resolver</h1>
	<h2 class="text-xl font-bold pb-1">Blocking</h2>
	<p>
		Diese DNS-Resolver gehören zu Internetanbietern, die CUII-Mitglieder sind. Sie blockieren Zugriffe auf Webseiten, die in der CUII-Blacklist stehen.
	</p>
	<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
		<ResolverStatus v-for="resolver in blockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
	</div>
	<h2 class="text-xl font-bold pb-1">Non-Blocking</h2>
	<p>
		Diese DNS-Resolver sind unabhängig von Internetanbietern und blockieren keine Webseiten auf Sperrempfehlungen der CUII.
	</p>
	<div class="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
		<ResolverStatus v-for="resolver in nonBlockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
	</div>
</template>

<style scoped>

</style>