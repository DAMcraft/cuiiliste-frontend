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

let color = 'success'
let tooltip = 'Erreichbar, Ping: ' + props.ping + 'ms'
if (props.response === 'BLOCKED') {
	color = 'accent'
	tooltip = 'Blockiert die Anfrage, Ping: ' + props.ping + 'ms'
} else if (props.response === 'ERROR') {
	color = 'error'
	tooltip = 'Error'
} else if (props.response === 'NXDOMAIN') {
	color = '[--lessimportant]'
	tooltip = 'Domain konnte nicht gefunden werdenm, Ping: ' + props.ping + 'ms'
} else if (props.response === 'TIMEOUT') {
	color = '[--lessimportant]'
	tooltip = 'Timed out'
}
</script>

<template>
	<div class="text-center items-center flex gap-2">
		<span :class="`text-${color}`">
			<Icon name="uil:check" v-if="props.response === 'NOT_BLOCKED'"></Icon>
			<Icon name="uil:ban" v-else-if="props.response === 'BLOCKED'"></Icon>
			<Icon name="uil:clock" v-else-if="props.response === 'TIMEOUT'"></Icon>
			<Icon name="uil:times" v-else-if="props.response === 'ERROR'"></Icon>
			<span>{{ props.name }}</span>
		</span>
		<div class="tooltip mt-1.5" :data-tip="tooltip">
			<Icon name="uil:info-circle"></Icon>
		</div>
	</div>
</template>

<style scoped>

</style>