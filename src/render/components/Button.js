import { NButton } from 'naive-ui'
import { toRefs } from 'vue'

export default {
    name: 'Button',
    props: {
        value: {
            type: String,
            default: '我是一个按钮'
        },
        icon: {
            type: String,
            default: 'button'
        }
    },
    setup(props) {
        const { value, icon } = toRefs(props)

        const slot = {
            icon: () => <svg-icon iconClass={icon.value} />
        }

        return () => <NButton v-slots={slot}>{value.value}</NButton>
    }
}
