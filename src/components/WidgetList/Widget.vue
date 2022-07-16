<template>
    <div class="widget">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style scoped>
.widget {
    background-color: #ffffff;
    width: 70%;
    height: 30px;
    color: rgb(46, 46, 46);
    border: 1px dashed #41b883;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
}

.widget:hover {
    border: 1px dashed rgb(255, 255, 255);
    background-color: #41b883;
    color: rgb(255, 255, 255);
}

.icon {
    margin-right: 5px;
}
</style>
