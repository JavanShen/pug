import { NTag } from 'naive-ui'
import { toRefs } from 'vue'

export default {
    name: 'Tag',
    props: {
        value: {
            type: String,
            default: '无名'
        }
    },
    setup(props) {
        const { value } = toRefs(props)

        return () => <NTag>{value.value}</NTag>
    }
}
