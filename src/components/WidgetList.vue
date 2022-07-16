<template>
    <Preview :overview="list" />
</template>

<script setup>
import Preview from '@/render/preview.vue'
import Widget from './Widget.vue'

const elements = [
    {
        value: '输入框',
        icon: 'input'
    },
    {
        value: '按钮',
        icon: 'button'
    },
    {
        value: '标签',
        icon: 'tag'
    }
].map(item => {
    return {
        tag: (
            <Widget>
                <svg-icon class="icon" icon-class={item.icon} />
                {item.value}
            </Widget>
        ),
        span: 12
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
