<script setup lang="ts">
const domains = ref([])

async function getBlockedDomains() {
	const res = await fetch(useRuntimeConfig().public.api_root + '/blocked_domains')
	return await res.json()
}
getBlockedDomains().then((res) => {
	domains.value = res
})
</script>

<template>
	<h1 class="text-2xl font-bold text-center">Von der <span class="text-accent">CUII</span> gesperrte Domains</h1>
	<div class="flex flex-row justify-center w-full">
		<div v-if="domains.length > 0" class="flex flex-col items-center md:w-1/2 sm:w-3/4 w-full">
			<DomainTable :domains="domains"></DomainTable>
		</div>
		<div v-else class="pt-10">
			<span class="loading loading-spinner w-[4rem] text-[--lessimportant]"></span>
		</div>
	</div>
</template>

<style scoped>

</style>