<template>
    <NRadioGroup :value="val" :name="property" @update="handelUpdate">
        <NRadioButton
            v-for="item in list"
            :key="item.value"
            :value="item.value"
            :label="item.label"
        />
    </NRadioGroup>
</template>

<script setup>
import { NRadioButton, NRadioGroup } from 'naive-ui'
import { options } from '@/options'

const prop = defineProps({
    property: {
        type: String
    },
    val: {
        type: String,
        default: null
    }
})

const emit = defineEmits(['update:val'])

const handelUpdate = newVal => {
    emit('update:val', newVal)
}

let list = []

switch (prop.property.value) {
    case 'nbutton-size':
        list = options.size.slice(0, 4)
        break
    case 'nbutton-shape':
        list = options.shape
        break
    case 'nbutton-level':
        list = options.level
        break
    default:
        list = []
}
</script>
