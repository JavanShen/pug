<script>
import { NForm, NGrid, NFormItemGi } from 'naive-ui'
import Sortable from 'sortablejs'
import { ref, onMounted, toRefs } from 'vue'
import JsonToComponent from './JsonToComponent'

export default {
    name: 'Preview',
    props: {
        overview: {
            type: Object,
            require: true
        }
    },
    setup(props) {
        const grid = ref(null)

        const { overview } = toRefs(props)
        const { elements } = overview.value

        const renderFormItem = el => {
            const { span, label, ...another } = el
            const Child = JsonToComponent({ ...another })
            return (
                <NFormItemGi class="form-item-gi" span={span} label={label}>
                    <Child />
                </NFormItemGi>
            )
        }

        const initSortable = el => {
            return Sortable.create(el, {
                animation: 150,
                ghostClass: 'ghost',
                sort: false
            })
        }

        onMounted(() => {
            initSortable(grid.value.$el)
        })

        return () => (
            <NForm>
                <NGrid ref={grid}>{elements.map(renderFormItem)}</NGrid>
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
