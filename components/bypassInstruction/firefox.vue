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
		<div class="collapse-title text-xl font-medium">Firefox <span v-if="isRecommended" class="text-accent">(Einfach)</span></div>
		<div class="collapse-content md:ml-4">
			<p><count>1.</count> Öffne Firefox </p>
			<p><count>2.</count> Klicke auf die drei Striche oben rechts und wähle "Einstellungen".</p>
			<NuxtImg src="/img/bypass/firefox1.png" alt="Firefox Einstellungen" width="300" />
			<p><count>3.</count> Wähle "Datenschutz & Sicherheit" aus.</p>
			<NuxtImg src="/img/bypass/firefox2.png" alt="Firefox Datenschutz & Sicherheit" width="300" />
			<p><count>4.</count> Scrolle nach ganz unten und wähle "Erhöhter Schutz" aus.</p>
			<NuxtImg src="/img/bypass/firefox3.png" alt="Firefox Erhöhter Schutz" width="300" />
		</div>
	</div>
</template>

<style scoped>

</style>