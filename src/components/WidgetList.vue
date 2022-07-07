<template>
    <Preview :overview="list" />
</template>

<script setup>
import Preview from '@/render/preview.vue'

const elements = ['input', 'button'].map(item => {
    return {
        tag: item,
        span: 12,
        content: 'init'
    }
})

const list = {
    draggable: {
        open: true,
        source: true  
    },
    elements
}
</script>