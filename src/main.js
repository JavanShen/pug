import { createApp } from 'vue'
import { create, NGrid } from 'naive-ui'
import App from './App.vue'

const naiveui = create({
    components: [NGrid]
})

createApp(App).use(naiveui).mount('#app')
