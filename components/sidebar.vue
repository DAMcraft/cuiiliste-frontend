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
		<SidebarItem link="/about" :active="currentPage === '/about'">
			About
		</SidebarItem>
	</div>
</template>

<style scoped>

</style>