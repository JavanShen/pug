<template>
    <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
            <WidgetList />
        </n-layout-sider>
        <n-layout>
            <n-layout-header>颐和园路</n-layout-header>
            <n-layout-content content-style="padding: 24px;">
                <TestForm />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'
import WidgetList from '@/components/WidgetList.vue'
</script>