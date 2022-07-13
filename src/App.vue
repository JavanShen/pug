<template>
    <n-layout class="container" has-sider>
        <n-layout-sider bordered content-style="padding: 24px;">
            <WidgetList />
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered class="header"
                >颐和园路<svg-icon icon-class="tag"
            /></n-layout-header>
            <n-layout-content class="content" content-style="padding: 24px;">
                <WorkSpace />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'
import WidgetList from '@/components/WidgetList.vue'
import WorkSpace from '@/components/WorkSpace.vue'

const headerHeight = `${60}px`
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
</style>
