<template>
    <RenderSetting v-for="(item, key) in calOp" :tag="tag" :key="key" v-model:val="calOp[key]" />
</template>

<script setup>
import { computed, toRefs } from 'vue'
import RenderSetting from './RenderSetting'

const prop = defineProps({
    options: Object
})

const emit = defineEmits(['update:options'])

const { options } = toRefs(prop)
const { tag } = toRefs(options)

const calOp = computed({
    get() {
        const obj = {}
        Object.keys(options.value).forEach(key => {
            if (key !== 'tag') obj[key] = options.value[key]
        })
        return obj
    },
    set(val) {
        emit('update:options', val)
    }
})
</script>
