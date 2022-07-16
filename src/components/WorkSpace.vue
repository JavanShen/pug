<template>
    <Preview class="work-space" :overview="finalConfig" />
</template>

<script setup>
import Preview from '@/render/preview.vue'
import { computed } from 'vue'

const props = defineProps({
    config: {
        type: Object,
        default: () => ({ elements: [] }),
        require: true
    }
})

const finalConfig = computed(() => {
    return {
        name: 'WorkSpace',
        draggable: {
            group: 'creation',
            ghostClass: 'work-space-ghost',
            dragClass: 'work-space-drag'
        },
        ...props.config
    }
})
</script>

<style scoped>
.work-space {
    height: 100%;
}
</style>
