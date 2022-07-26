import { NButton } from 'naive-ui'
import { toRefs } from 'vue'

export default {
    name: 'Button',
    props: {
        value: {
            type: String,
            default: '我是一个按钮'
        },
        icon: String,
        level: String,
        shape: String
    },
    setup(props) {
        const { value, icon, level, shape } = toRefs(props)

        const slot = {
            icon: () => <svg-icon iconClass={icon.value} />
        }

        const property = {}

        if (level.value) {
            property[level.value] = true
        }
        if (shape.value) {
            property[shape.value] = true
        }

        return () => (
            <NButton {...property} v-slots={icon.value && slot}>
                {value.value}
            </NButton>
        )
    }
}
