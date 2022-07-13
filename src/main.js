import { createApp } from 'vue'
import { create, NGrid } from 'naive-ui'
import SvgIcon from '@/icon'
import App from './App.vue'

const naiveui = create({
    components: [NGrid]
})

createApp(App).use(SvgIcon).use(naiveui).mount('#app')
