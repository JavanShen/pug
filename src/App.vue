<template>
    <n-layout class="container">
        <n-layout-header bordered class="header">颐和园路</n-layout-header>
        <n-layout has-sider>
            <n-layout-sider bordered content-style="padding: 24px;">
                <WidgetList />
            </n-layout-sider>
            <n-layout-content class="content" content-style="padding: 24px;">
                <WorkSpace :config="config" @change="addWidget" @sort="sortWidget" />
            </n-layout-content>
            <n-layout-sider class="right" content-style="padding: 24px;">
                <RightPanel :componentOptions="config.elements[activeIndex]" />
            </n-layout-sider>
        </n-layout>
    </n-layout>
</template>

<script setup>
import { ref } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'
import WidgetList from '@/components/WidgetList/index.vue'
import WorkSpace from '@/components/WorkSpace.vue'
import RightPanel from '@/components/RightPanel/index.vue'
import componentsOption from '@/options'
import uniqueId from 'lodash/uniqueId'

const headerHeight = `${60}px`
const config = ref({
    ...componentsOption.nform,
    elements: []
})

const activeIndex = ref(0)

const addWidget = (to, from, widget) => {
    const tag = `n${widget.tag}`
    const uniId = uniqueId('el')
    config.value.elements.splice(to, 0, {
        id: uniId,
        propertyName: uniId,
        span: 24,
        label: widget.name,
        tag,
        ...componentsOption[tag]
    })
    activeIndex.value = to
}

const sortWidget = (to, from) => {
    const [ele] = config.value.elements.splice(from, 1)
    config.value.elements.splice(to, 0, ele)
}
</script>

<style scoped>
.container {
    height: 100vh;
}

.header {
    height: v-bind(headerHeight);
}

.content {
    height: calc(100vh - v-bind(headerHeight));
}

.right::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    background-color: rgb(239, 239, 245);
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
