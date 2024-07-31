<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    logoLink: {
        type: String,
        default: false
    },
	shouldInvertDark: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="bg-base-200 shadow-lg min-h-64 w-52 mx-auto relative">
		<div class="block h-16 bg-base-300"></div>
		<div class="top-4 h-30 w-30 rounded-full overflow-hidden mx-auto absolute left-1/2 transform -translate-x-1/2 ">
			<div class="rounded-full h-24 w-24 overflow-hidden bg-base-300 transition-all duration-500 ease-in-out flex items-center m-2.5 hover:w-28 hover:h-28 hover:m-0 group">
				<div class="absolute inset-3.5 border-[3px] border-base-100 rounded-full transition-all duration-500 ease-in-out group-hover:inset-1"></div>

				<NuxtImg :src="logoLink" class="h-auth w-max transition-all duration-500 ease-in-out grayscale z-10" alt="Logo"
				                        :class="shouldInvertDark ? 'dark:invert' : 'group-hover:grayscale-0'" />
			</div>
		</div>
		<div class="text-center text-base-content mt-24">
			<div class="font-bold text-lg">{{ name }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>