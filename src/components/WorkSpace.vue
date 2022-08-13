<template>
    <Preview class="work-space" @put="handelPut" @sort="handelSort" :overview="finalConfig" />
</template>

<script setup>
import Preview from '@/render/preview.vue'
import { computed, toRefs } from 'vue'
import widgets from '@/components/WidgetList/widgets'

const prop = defineProps({
    config: Object
})

const emit = defineEmits(['change', 'sort'])

const { config } = toRefs(prop)

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
    emit('change', to, from, widget)
}

const handelSort = (...arg) => {
    emit('sort', ...arg)
}
</script>

<style scoped>
.work-space {
    height: 100%;
}
</style>
