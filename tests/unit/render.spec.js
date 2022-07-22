import SvgIcon from '@/icon'
import { mount } from '@vue/test-utils'
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

            const render = obj[key].setup || obj[key].render
            if (!render)
                return {
                    message: () => '值应为一个组件',
                    pass: false
                }
        }

        return {
            message: () => '自定义组件集合符合规范',
            pass: true
        }
    }
})

describe('组件集合', () => {
    test('自定义组件集合是否符合规范', () => {
        expect(customComponents).checkCustomComponents()
    })

    test('获取组件方法', () => {
        expect(getComponent('nbutton')).toHaveProperty('setup')
        expect(getComponent('n-button')).toHaveProperty('setup')
        expect(getComponent('')).toBeUndefined()
    })

    describe('自定义按钮组件', () => {
        const initButton = props => {
            const options = {
                global: {
                    plugins: [SvgIcon]
                }
            }

            if (props) {
                options.props = { ...props }
            }

            return mount(getComponent('nbutton'), options)
        }

        test('未传值', () => {
            const button = initButton()

            expect(button.find('.n-button').text()).toBe('我是一个按钮')
        })

        test('传值', () => {
            const button = initButton({ value: '测试', icon: 'button' })

            expect(button.find('.n-button').text()).toBe('测试')
            expect(button.find('svg')).toBeDefined()
        })
    })
})
