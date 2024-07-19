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

let color = 'bg-green-500'  // REACHABLE
if (props.health === 'UNREACHABLE') {
	color = 'bg-gray-500'
} else if (props.health === 'ERROR') {
	color = 'bg-red-500'
}
</script>

<template>
	<div class="bg-bg-secondary text-center overflow-auto z-10 border-slate-500">
		<span class="text-white font-bold float-left mt-1 mb-1 ml-3 p-2">
	        {{ props.name }}
		</span>
		<div class="float-right mr-3 mt-3">
			<div class="flex">
				<div :class="color" class="rounded-full p-1 ml-1">
					{{ props.health }} <span v-if="props.health === 'REACHABLE'">({{ props.ping }}ms)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>