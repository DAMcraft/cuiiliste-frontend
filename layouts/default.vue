<template>
    <div class="h-full w-full fixed">
        <Topbar :expand="expand"></Topbar>
        <div class="flex h-full">
            <div class="md:w-80 transition-all duration-250" :class="!collapsed && smallWindow() ? 'w-full' : 'w-0'">
                <Sidebar></Sidebar>
            </div>
            <div class=" overflow-y-auto transition-all duration-250" :class="!collapsed && smallWindow() ? 'w-0' : 'w-full'">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config.js'

const fullTailwindConfig = resolveConfig(tailwindConfig)

const { width, height } = useWindowSize()


const smallWindow = () => {
    return width.value < fullTailwindConfig.theme.screens.md.replace('px', '')
}

const collapsed = ref(true)

const expand = () => {
    collapsed.value = !collapsed.value
}

const route = useRoute()
watch(() => route.path, () => {
    collapsed.value = true
})
</script>