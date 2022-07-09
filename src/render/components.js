import { NForm, NInput, NButton, NRadioGroup, NRadio, NSwitch } from 'naive-ui'

const components = {
    "nform": NForm,
    "ninput": NInput,
    "nbutton": NButton,
    "nradiogroup": NRadioGroup,
    "nradio": NRadio,
    "nswitch": NSwitch
}

export default function getComponent(key = "") {
    const formatKey = key.replace(/-/g, '').toLowerCase()

    const component = components[formatKey]

    if (component) return component

    return components['n' + formatKey]
}