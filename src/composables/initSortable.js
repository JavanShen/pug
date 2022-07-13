import Sortable from 'sortablejs'

export default function initSortable(el, config, emits) {
    const sort = Sortable.create(el, {
        animation: 150,
        ghostClass: 'ghost',
        ...config,
        onAdd: evt => {
            emits('put', evt)
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
