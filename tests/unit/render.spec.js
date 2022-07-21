import { isVNode } from 'vue'
import customComponents from '@/render/components/index'
import getComponent from '@/render/components'

expect.extend({
    checkCustomComponents(obj) {
        const keys = Object.keys(obj)

        for (const key of keys) {
            if (!/^n[a-z]+$/.test(key))
                return {
                    message: () => '属性名不符合规范',
                    pass: false
                }

            const render = obj[key].setup()()
            if (!isVNode(render))
                return {
                    message: () => '组件需要返回一个虚拟dom',
                    pass: false
                }
        }

        return {
            message: () => '自定义组件集合符合规范',
            pass: true
        }
    }
})

describe('components', () => {
    test('自定义组件集合是否符合规范', () => {
        expect(customComponents).checkCustomComponents()
    })

    test('获取组件方法', () => {
        expect(getComponent('nbutton')).toHaveProperty('setup')
        expect(getComponent('n-button')).toHaveProperty('setup')
        expect(getComponent('')).toBeUndefined()
    })
})
