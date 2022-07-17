<template>
    <Preview class="work-space" @put="handelPut" :overview="finalConfig" />
</template>

<script setup>
import Preview from '@/render/preview.vue'
import { computed, ref } from 'vue'
import widgets from '@/components/WidgetList/widgets'

const config = ref({
    elements: []
})

const finalConfig = computed(() => {
    return {
        name: 'WorkSpace',
        draggable: {
            group: 'creation',
            ghostClass: 'work-space-ghost',
            dragClass: 'work-space-drag'
        },
        ...config.value
    }
})

const handelPut = (to, from) => {
    const widget = widgets[from]
    config.value.elements.splice(to, 0, {
        span: 24,
        label: widget.name,
        tag: `n${widget.tag}`
    })
}
</script>

<style scoped>
.work-space {
    height: 100%;
}
</style>
