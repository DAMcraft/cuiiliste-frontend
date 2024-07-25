<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	response: {
		type: String,
		required: true
	},
	ping: {
		type: Number,
		required: true
	},
})

const color = computed(() => {
	if (props.response === 'BLOCKED') {
		return 'accent'
	} else if (props.response === 'ERROR') {
		return 'error'
	} else if (props.response === 'NXDOMAIN' || props.response === 'TIMEOUT') {
		return '[--lessimportant]'
	}
	return 'success'
})

const tooltip = computed(() => {
	if (props.response === 'BLOCKED') {
		return 'Blockiert die Anfrage, Ping: ' + props.ping + 'ms'
	} else if (props.response === 'ERROR') {
		return 'Error'
	} else if (props.response === 'NXDOMAIN') {
		return 'Domain konnte nicht gefunden werden, Ping: ' + props.ping + 'ms'
	} else if (props.response === 'TIMEOUT') {
		return 'Timed out'
	} else {
		return 'Erreichbar, Ping: ' + props.ping + 'ms'
	}
})
</script>

<template>
	<div class="text-center items-center flex gap-2 align-middle">
		<Icon name="uil:check" v-if="props.response === 'NOT_BLOCKED'" :class="`text-${color} mt-1`" />
		<Icon name="uil:ban" v-else-if="props.response === 'BLOCKED'" :class="`text-${color} mt-1`" />
		<Icon name="uil:clock" v-else-if="props.response === 'TIMEOUT'" :class="`text-${color} mt-1`" />
		<Icon name="uil:times" v-else-if="props.response === 'NXDOMAIN'" :class="`text-${color} mt-1`" />
		<Icon name="uil:times" v-else-if="props.response === 'ERROR'" :class="`text-${color} mt-1`" />

		<span :class="`text-${color}`" >{{ props.name }}</span>
		<div class="tooltip mt-1.5" :data-tip="tooltip">
			<Icon name="uil:info-circle"></Icon>
		</div>
	</div>
</template>

<style scoped>

</style>