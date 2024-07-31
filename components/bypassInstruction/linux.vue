<script setup lang="ts">

const props = defineProps({
	isRecommended: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="collapse collapse-plus bg-base-200 mx-auto">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium flex items-center"><Icon name="iconoir:linux" class="mr-2" />Linux</div>
		<div class="collapse-content md:ml-4">
			<p>
				Ey, du hast Linux installiert, du weißt ganz genau was du machen musst. Ändere einfach deine DNS Einstellungen,
				sodass du nicht mehr das DNS durch den Router beziehst.</p>
		</div>
	</div>
</template>

<style scoped>

</style>