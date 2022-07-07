import { NForm, NInput, NButton, NRadioGroup, NRadio } from 'naive-ui'

const components = {
    "nform": NForm,
    "ninput": NInput,
    "nbutton": NButton,
    "nradiogroup": NRadioGroup,
    "nradio": NRadio
}

export default function getComponent(key = "") {
    key = key.replace(/-/g, '').toLowerCase(key)

    const component = components[key]

    if (component) return component

    return components['n' + key]
}