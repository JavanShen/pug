<template>
    <n-tabs animated default-value="component">
        <n-tab-pane name="component" tab="组件设置">
            <ComponentSetting :options="componentOptions" />
        </n-tab-pane>
        <n-tab-pane name="form" tab="表单设置">表单设置</n-tab-pane>
    </n-tabs>
</template>

<script setup>
import { NTabs, NTabPane } from 'naive-ui'
import ComponentSetting from './ComponentSetting.vue'

defineProps({
    componentOptions: Object
})
</script>
