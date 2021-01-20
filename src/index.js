import Contextmenu from './components/Index.vue'
const install = Vue => {
  Vue.component(Contextmenu.name, Contextmenu)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
