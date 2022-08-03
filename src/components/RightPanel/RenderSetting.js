import { toRefs, computed } from 'vue'
import { typeMap, keyMap } from '@/options'
import { NFormItem, NSwitch } from 'naive-ui'
import Radio from './components/Radio.vue'

export default {
    name: 'RenderSetting',
    props: {
        tag: String,
        name: String,
        val: [String, Boolean, Number]
    },
    emits: ['change'],
    setup(props, { emit }) {
        const { tag, name, val } = toRefs(props)

        const calVal = computed({
            get() {
                return val.value
            },
            set(value) {
                emit('change', value, name.value)
            }
        })

        const widget = (t, k, v) => {
            if (typeof v.value === 'boolean') {
                return <NSwitch v-model:value={v.value} />
            }

            if (typeMap.radio.includes(k.value)) {
                return <Radio property={`${t.value}-${k.value}`} v-model:val={v.value} />
            }

            return null
        }

        return () => <NFormItem label={keyMap[name.value]}>{widget(tag, name, calVal)}</NFormItem>
    }
}
