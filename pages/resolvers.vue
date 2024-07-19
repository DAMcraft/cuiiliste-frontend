<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

let resolvers = await (await fetch(useRuntimeConfig().public.api_root + '/resolvers')).json()
// this will look something like this:
// [{"health":"REACHABLE","is_blocking":false,"isp":null,"ping":134,"resolver":"Cloudflare"},{"health":"REACHABLE","is_blocking":false,"isp":null,"ping":134,"resolver":"Freifunk Regensburg"},{"health":"REACHABLE","is_blocking":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 4/4"},{"health":"REACHABLE","is_blocking":false,"isp":null,"ping":134,"resolver":"GCore"},{"health":"REACHABLE","is_blocking":true,"isp":"Telefonica","ping":134,"resolver":"Telef\u00f3nica (02) 2/4"},{"health":"REACHABLE","is_blocking":true,"isp":"Telekom","ping":135,"resolver":"Telekom 1/4"},{"health":"REACHABLE","is_blocking":false,"isp":null,"ping":134,"resolver":"NextDNS"},{"health":"REACHABLE","is_blocking":false,"isp":null,"ping":134,"resolver":"Freifunk M\u00fcnchen"},{"health":"REACHABLE","is_blocking":true,"isp":"1&1","ping":134,"resolver":"1&1 (West)"},...]
let blockingResolvers = resolvers.filter((resolver: any) => resolver.is_blocking).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
let nonBlockingResolvers = resolvers.filter((resolver: any) => !resolver.is_blocking).sort((a: any, b: any) => a.resolver.localeCompare(b.resolver))
</script>

<template>
	<h1>DNS Resolvers</h1>
	<h2>Blocking</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<Resolver v-for="resolver in blockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
	</div>
	<h2>Non-Blocking</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<Resolver v-for="resolver in nonBlockingResolvers" :name="resolver.resolver" :health="resolver.health" :ping="resolver.ping" :key="resolver.resolver" />
	</div>
</template>

<style scoped>

</style>