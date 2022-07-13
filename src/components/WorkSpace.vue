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
        draggable: {
            group: 'creation'
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
