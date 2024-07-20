<template>
    <NuxtLink class="p-1 ml-2 mr-2" :to="link">
        <div class="p-2 w-full text-center">
            <div class="font-bold text-accent" :class="active ? '' : 'invisible h-0'">
                <slot></slot>
            </div>
            <div class="text-base-content" v-if="!active">
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
