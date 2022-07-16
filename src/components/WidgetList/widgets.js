const tags = ['input', 'button', 'tag']

const tagName = {
    input: '输入框',
    button: '按钮',
    tag: '标签'
}

const widgets = tags.map(item => {
    return {
        tag: item,
        name: tagName[item],
        icon: item
    }
})

export default widgets
