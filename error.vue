<script setup lang="ts">

import type {NuxtError} from "#app";

const props = defineProps({
	error: Object as () => NuxtError
})

</script>

<template>
	<div class="error-page text-center mt-20 mx-auto">
		<div v-if = "error?.statusCode === 404">
			<h1 class="text-3xl font-bold"> Die Seite konnte nicht gefunden werden</h1>
			<a href="/" class="link">Zurück zur Startseite</a>
		</div>
		<div v-else>
			<h1 class="text-3xl font-bold">Ein Fehler ist aufgetreten</h1>
			<div class="error-code">{{ error?.statusCode }}</div>
			<div class="error-message">{{ error?.message }}</div>
		</div>
	</div>
</template>