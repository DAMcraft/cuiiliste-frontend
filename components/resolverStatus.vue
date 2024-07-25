<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	health: {
		type: String,
		required: true
	},
	ping: {
		type: Number,
		required: true
	},
})

let color = 'success'
let tooltip = 'Ping: ' + props.ping + 'ms'
if (props.health === 'UNREACHABLE') {
	color = 'warning'
	tooltip = 'Unreachable'
} else if (props.health === 'ERROR') {
	color = 'error'
	tooltip = 'Error'
}
</script>

<template>
	<div class="text-center items-center flex gap-2">
		<Icon name="uil:check" class="text-success" v-if="props.health === 'REACHABLE'"></Icon>
		<Icon name="uil:ban" class="text-warning" v-else-if="props.health === 'UNREACHABLE'"></Icon>
		<Icon name="uil:times" class="text-error" v-else></Icon>
		<span :class="`text-${color}`">
			{{ props.name }}
		</span>
		<div class="tooltip mt-1.5" :data-tip="tooltip">
			<Icon name="uil:info-circle"></Icon>
		</div>
	</div>
</template>

<style scoped>

</style>