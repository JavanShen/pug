import getComponent from './components'

export default function JsonToComponent(obj = {}) {
    const { tag, content, ...other } = obj

    const Tag = getComponent(tag) || tag

    return {
        render() {
            return <Tag {...other}>{content}</Tag>
        }
    }
}
