<template>
    <NuxtLink class="p-1 ml-2 mr-2" :to="link">
        <div class="bg-bg-primary text-white rounded-xl  p-2 w-full hover:bg-neutral-950">
            <div class="font-bold text-white" v-if="active">
                <slot></slot>
            </div>
            <div v-else class="text-gray-300">
                <slot></slot>
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
})

</script>
