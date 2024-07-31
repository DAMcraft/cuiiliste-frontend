<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
const props = defineProps({
    domains: {
		type: Array,
		required: true
	}
})

const currentPage = ref(1)
const rowsPerPageOptions = {
	15: 15,
	30: 30,
	50: 50,
	100: 100,
	"Alle": props.domains?.length
}
const rowsPerPage = ref(15)
const isSmallWindow = computed(() => {
	let isSmall = useWindowSize().width.value < 626;
	if (isSmall) {
		rowsPerPage.value = props.domains?.length
	}
	return isSmall
})
const search = ref('')
const getDomains = computed(() => {
	return props.domains.filter((domain: any) => {
		return domain.domain.toLowerCase().includes(search.value.toLowerCase())
	})
})
const currentPageDomains = computed(() => {
	const start = (currentPage.value - 1) * rowsPerPage.value
	const end = start + rowsPerPage.value
	return getDomains.value.slice(start, end)
})
const totalDomains = computed(() => {
	return getDomains.value.length
})
const pageCount = computed(() => {
	return Math.ceil(totalDomains.value / rowsPerPage.value)
})
</script>

<template>
	<div class="flex flex-row justify-center w-full my-2 px-3">
		<input type="text" class="input input-bordered w-full" placeholder="Suche..." v-model="search">
		<select class="select select-bordered ml-1 " v-model="rowsPerPage" v-if="!isSmallWindow">
			<option
				v-for="(option, key) in rowsPerPageOptions"
				key="option"
				:value="option">
				{{ key }}
			</option>
		</select>
	</div>
	<table class="table table-zebra shadow-lg border border-base-200 rounded-box">
		<thead>
			<tr>
				<th>Domain</th>
				<th class="text-end mr-2">Blockiert am*</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="domain in currentPageDomains" :key="domain.domain">
				<td>{{ domain.domain }}</td>
				<td class="text-end mr-2">{{ domain.first_blocked_on }}</td>
			</tr>
		</tbody>
	</table>
	<div class="join flex justify-center mt-2" v-if="pageCount > 1">
		<input key="prev" class="join-item btn btn-square" type="button" @click="currentPage = currentPage - 1" :disabled="currentPage === 1" value="<">
		<input v-for="page in pageCount" class="join-item btn btn-square" :key="page" type="button" @click="currentPage = page" :class="currentPage === page ? 'btn-accent' : ''" :value="page">
		<input key="next" class="join-item btn btn-square" type="button" @click="currentPage = currentPage + 1" :disabled="currentPage === pageCount" value=">">
	</div>
	<p class="text-xs text-gray-500 mt-2">
		* Das Datum ist ungenau, teils bedeutet es, wann die Sperrempfehlung stattfand,
		teils wann die Domain das erste Mal in unserer Datenbank auftauchte.
	</p>
</template>

<style scoped>

</style>