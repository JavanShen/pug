import { NForm, NInput, NButton, NRadioGroup, NRadio, NSwitch } from 'naive-ui'
import customComponets from './components/index'

const components = {
    nform: NForm,
    ninput: NInput,
    nbutton: NButton,
    nradiogroup: NRadioGroup,
    nradio: NRadio,
    nswitch: NSwitch,
    ...customComponets
}

export default function getComponent(key = '') {
    return components[key.replace(/-/g, '').toLowerCase()]
}
