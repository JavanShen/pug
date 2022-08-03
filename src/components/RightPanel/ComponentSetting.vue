<template>
    <RenderSetting
        v-for="(item, key) in calOp"
        :tag="options.tag"
        :key="key"
        :name="key"
        :val="item"
        @change="handelChange"
    />
</template>

<script setup>
import { computed, toRefs } from 'vue'
import RenderSetting from './RenderSetting'

const prop = defineProps({
    options: Object
})

const emit = defineEmits(['update:options'])

const { options } = toRefs(prop)

const handelChange = (val, key) => {
    options.value[key] = val
}

const calOp = computed({
    get() {
        const obj = {}
        if (options.value) {
            Object.keys(options.value).forEach(key => {
                if (key !== 'tag') obj[key] = options.value[key]
            })
        }
        return obj
    },
    set(val) {
        emit('update:options', val)
    }
})
</script>
