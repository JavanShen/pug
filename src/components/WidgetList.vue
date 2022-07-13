<template>
    <Preview :overview="list" />
</template>

<script setup>
import Preview from '@/render/preview.vue'

const elements = ['输入框', '按钮', '开关'].map(item => {
    return {
        tag: 'ntag',
        span: 12,
        value: item
    }
})

const list = {
    draggable: {
        group: { name: 'creation', put: false, pull: 'clone' },
        sort: false
    },
    elements
}
</script>
