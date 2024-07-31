<template>
    <NuxtLink :to="link" class="md:p-0.5 md:mx-0.5 xl:p-1 xl:mx-2" >
        <div class="xl:p-2 md:p-0.5 text-center">
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
