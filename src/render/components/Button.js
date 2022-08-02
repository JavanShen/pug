import { NButton } from 'naive-ui'
import { toRefs } from 'vue'

export default {
    name: 'Button',
    props: {
        value: {
            type: String,
            default: '我是一个按钮'
        },
        level: String,
        shape: String
    },
    setup(props) {
        const { value, level, shape } = toRefs(props)

        const property = {}

        if (level.value) {
            property[level.value] = true
        }
        if (shape.value) {
            property[shape.value] = true
        }

        return () => <NButton {...property}>{value.value}</NButton>
    }
}
