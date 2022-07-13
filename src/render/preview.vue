<script>
import { NForm, NGrid, NFormItemGi } from 'naive-ui'
import { ref, onMounted, toRefs } from 'vue'
import initSortable from '@/composables/initSortable'
import JsonToComponent from './JsonToComponent'

export default {
    name: 'Preview',
    props: {
        overview: {
            type: Object,
            require: true
        }
    },
    emits: ['sort', 'pull', 'put'],
    setup(props, context) {
        const grid = ref(null)

        const { overview } = toRefs(props)
        const { draggable, elements } = overview.value

        const renderFormItem = el => {
            const { span, label, ...another } = el
            const Child = JsonToComponent({ ...another })
            return (
                <NFormItemGi class="form-item-gi" span={span} label={label}>
                    <Child />
                </NFormItemGi>
            )
        }

        onMounted(() => {
            if (draggable) {
                initSortable(grid.value.$el, draggable, context.emit)
            }
        })

        return () => (
            <NForm>
                <NGrid style="height: 100%" ref={grid}>
                    {elements.map(renderFormItem)}
                </NGrid>
            </NForm>
        )
    }
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
