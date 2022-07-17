import Sortable from 'sortablejs'

export default function initSortable({ el, config, emits, name }) {
    const sort = Sortable.create(el, {
        animation: 150,
        ghostClass: 'ghost',
        ...config,
        onEnd: evt => {
            if (name === 'WidgetList' && evt.from !== evt.to) {
                evt.item.parentNode.removeChild(evt.item)
            }
        },
        onAdd: evt => {
            emits('put', evt.newIndex, evt.oldIndex)
        },
        onSort: evt => {
            if (evt.form === evt.to) {
                emits('sort', evt)
            }
        }
    })

    return {
        sort
    }
}
