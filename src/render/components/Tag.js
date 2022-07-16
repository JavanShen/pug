import { NTag } from 'naive-ui'
import { toRefs } from 'vue'

export default {
    name: 'Tag',
    props: {
        value: {
            type: String,
            default: '无名'
        },
        icon: {
            type: String,
            default: 'input'
        }
    },
    setup(props) {
        const { value, icon } = toRefs(props)

        const slot = {
            icon: () => <svg-icon iconClass={icon.value} />
        }

        return () => <NTag v-slots={slot}>{value.value}</NTag>
    }
}
