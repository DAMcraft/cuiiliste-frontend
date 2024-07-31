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
		<div class="collapse-title text-xl font-medium">Linux</div>
		<div class="collapse-content md:ml-4">
			<p>Ey, du hast Linux installiert, du weißt ganz genau was du machen musst.</p>
		</div>
	</div>
</template>

<style scoped>

</style>