<template>
    <fieldset name="one">
        <legend>one</legend>
        <draggable tag="ul" :component-data="{
            type: 'transition-group',
            name: 'flip-list'
        }" v-bind="dragOptions({ group: { name: 'test', pull: 'clone', put: false } })" :list="list1" item-key="order"
            @start="start" @end="end">
            <template #item="{ element }">
                <li class="list-group-item">{{ element.name }}</li>
            </template>
        </draggable>
    </fieldset>
    <fieldset name="two">
        <legend>two</legend>
        <draggable tag="ul" :component-data="{
            type: 'transition-group',
            name: 'flip-list'
        }" v-bind="dragOptions()" :list="list2" item-key="order" @start="start" @end="end">
            <template #item="{ element }">
                <li class="list-group-item">{{ element.name }}</li>
            </template>
        </draggable>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'

const dragOptions = (obj) => ({
    animation: 200,
    group: 'test',
    disabled: false,
    ghostClass: 'ghost',
    ...obj
})

const  generateList=(data) => {
    return data.map((name, index) => {
        return {
            name,
            order: index + 1
        }
    })
}

const data1 = ['dog', 'cat', 'bird', 'horse', 'panda']
const data2 = ['apple', 'banana']

const list1 = ref(generateList(data1))

const list2 = ref(generateList(data2))

const start = () => {
}

const end = () => {
}
</script>

<style scoped>
.ghost {
    opacity: 0.5;
}

.flip-list-move {
    transition: transform 0.5s;
}

.list-group-item {
    cursor: move;
}
</style>