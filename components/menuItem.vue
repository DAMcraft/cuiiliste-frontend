<template>
    <NuxtLink class="p-1 ml-2 mr-2" :to="link">
        <div class="p-2 text-center">
            <div class="font-bold text-accent" :class="active ? '' : 'invisible h-0'">
                <span class="flex items-center">
                    <Icon :name="icon" class="mr-1" />
                    <slot></slot>
                </span>
            </div>
            <div class="text-base-content" v-if="!active">
                <span class="flex items-center">
                    <Icon :name="icon" class="mr-1" />
                    <slot></slot>
                </span>
            </div>
        </div>
    </NuxtLink>
</template>



<script setup>

const props = defineProps({
    link: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
	icon: {
		type: String,
		default: ''
	}
})

</script>
