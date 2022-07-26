import { toRefs, computed } from 'vue'
import { typeMap, keyMap } from '@/options'
import { NFormItem, NSwitch } from 'naive-ui'
import { Radio } from './components/Radio.vue'

export default {
    name: 'RenderSetting',
    props: {
        tag: String,
        key: String,
        val: [String, Boolean, Number]
    },
    emits: ['update:val'],
    setup(props, context) {
        const { tag, key, val } = toRefs(props)

        const calVal = computed({
            get() {
                return val.value
            },
            set(value) {
                context.emit('update:val', value)
            }
        })

        const widget = (t, k, v) => {
            if (typeof v === 'boolean') {
                return <NSwitch v-model:value={v} />
            }

            if (typeMap.radio.includes(k)) {
                return <Radio property={`${t}-${k}`} v-model:val={v} />
            }

            return null
        }

        return (
            <NFormItem label={keyMap[key.value]}>{widget(tag.value, key.value, calVal)}</NFormItem>
        )
    }
}
