<template>
    <Preview :overview="list" />
</template>

<script setup>
import Preview from '@/render/preview.vue'
import widgets from './widgets'
import Widget from './Widget.vue'

const elements = widgets.map(item => {
    return {
        tag: (
            <Widget>
                <svg-icon class="icon" icon-class={item.icon} />
                {item.name}
            </Widget>
        ),
        span: 12
    }
})

const list = {
    name: 'WidgetList',
    draggable: {
        group: { name: 'creation', put: false, pull: 'clone' },
        sort: false
    },
    elements
}
</script>
