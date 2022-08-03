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
    setup(props, { emit }) {
        const grid = ref(null)

        const { overview } = toRefs(props)
        const { draggable, elements, name } = overview.value

        const renderFormItem = el => {
            const { span, label, id, ...another } = el
            const Child = JsonToComponent({ ...another })
            return (
                <NFormItemGi class="form-grid-item" key={id} span={span} label={label}>
                    <Child />
                </NFormItemGi>
            )
        }

        onMounted(() => {
            if (draggable) {
                initSortable({
                    el: grid.value.$el,
                    config: draggable,
                    emits: emit,
                    name
                })
            }
        })

        return () => (
            <NForm>
                <NGrid class={name === 'WorkSpace' ? 'form-grid' : ''} ref={grid}>
                    {elements.map(renderFormItem)}
                </NGrid>
            </NForm>
        )
    }
}
</script>

<style scoped>
.form-grid::before {
    content: '';
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}

.form-grid-item {
    cursor: move;
    z-index: 2;
}

.form-grid-item :deep(.n-form-item-label) {
    cursor: move;
}

.ghost {
    opacity: 0.5;
}

.work-space-ghost {
    grid-column: span 24 / span 24 !important;
    background-color: #41b883;
    position: relative;
    opacity: 0.5;
}

.work-space-ghost :deep(.widget) {
    background-color: #41b883;
    border: none;
    color: white;
}
</style>
