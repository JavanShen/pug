import getComponent from './components'

export default function JsonToComponent(obj = {}) {
    const { tag, content, ...other } = obj

    const Tag = getComponent(tag)

    return {
        render() {
            return Tag ? <Tag {...other}>{content}</Tag> : <div></div>
        }
    }
}
