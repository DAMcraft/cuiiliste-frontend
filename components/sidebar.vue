<script setup>

const route = useRoute()

const currentPage = ref("/")
currentPage.value = route.path

// on route change, update currentPage
watch(() => route.path, (newVal) => {
    currentPage.value = newVal
})

</script>
<template>
	<div class="flex flex-col w-64 h-screen bg-bg-secondary text-white">
		<div class="h-2"></div>
		<SidebarItem link="/" :active="currentPage === '/'">
			Home
		</SidebarItem>
		<SidebarItem link="/resolvers" :active="currentPage === '/resolvers'">
			DNS Resolver status
		</SidebarItem>
		<SidebarItem link="/test" :active="currentPage === '/test'">
			Domain testen
		</SidebarItem>
	</div>
</template>

<style scoped>

</style>