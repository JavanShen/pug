const req = require.context('./components', false, /\.js$/)

const componentsOption = {}

req.keys().forEach(key => {
    const keyName = key.match(/\/([a-zA-Z]+)\.js/)[1]
    componentsOption[keyName] = req(key).default
})

export const keyMap = {
    color: '颜色',
    shape: '形状',
    size: '尺寸',
    disabled: '是否禁用',
    strong: '是否加粗',
    level: '级别',
    readonly: '是否只读',
    clearable: '是否可清除'
}

export const typeMap = {
    radio: ['size', 'level', 'shape']
}

export const options = {
    size: [
        {
            label: '迷你',
            value: 'tiny'
        },
        {
            label: '小',
            value: 'small'
        },
        {
            label: '中',
            value: 'medium'
        },
        {
            label: '大',
            value: 'large'
        },
        {
            label: '巨大',
            value: 'huge'
        }
    ],
    shape: [
        {
            label: '方形',
            value: null
        },
        {
            label: '圆角',
            value: 'round'
        },
        {
            label: '圆形',
            value: 'circle'
        }
    ],
    level: [
        {
            label: '一级',
            value: null
        },
        {
            label: '二级',
            value: 'secondary'
        },
        {
            label: '三级',
            value: 'tertiary'
        },
        {
            label: '四级',
            value: 'quaternary'
        }
    ]
}

export default componentsOption
