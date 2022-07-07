<script>
import { NForm, NGrid, NFormItemGi } from 'naive-ui'
import Draggable from 'vuedraggable'
import JsonToComponent from './JsonToComponent'

const dragOptions = (obj) => ({
    animation: 200,
    group: 'test',
    disabled: false,
    ghostClass: 'ghost',
    ...obj
})

export default {
    name: 'Preview',
    props: {
        overview: {
            type: Object,
            require: true
        }
    },
    render() {
        const draggable = this.overview.draggable || {}
        const elements = this.overview.elements

        const renderFormItem = (el) => {
            const { span, label, ...another } = el
            const Child = JsonToComponent({ ...another })
            return (
                <NFormItemGi span={span} label={label}>
                    <Child />
                </NFormItemGi>
            )
        }

        const slot = {
            item: ({ element }) => renderFormItem(element)
        }

        return (
            <NForm>
                {
                    draggable.open ?

                        (<Draggable
                            tag="n-grid"
                            {...dragOptions(draggable.source ? { group: { name: 'test', pull: 'clone', put: false } } : {})}
                            list={elements}
                            item-key="tag"
                        >
                            {slot}
                        </Draggable>) :

                        (<NGrid>
                            elements.map(renderFormItem)
                        </NGrid>)
                }
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