import { isVNode } from 'vue'
import getComponent from './components'

export default function JsonToComponent(obj = {}) {
    const { tag, content, ...other } = obj

    if (isVNode(tag)) return tag

    const Tag = getComponent(tag) || tag

    return {
        render() {
            return <Tag {...other}>{content}</Tag>
        }
    }
}
