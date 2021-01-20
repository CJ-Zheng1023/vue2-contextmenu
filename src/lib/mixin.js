import { fixSubPosition } from './helpers'
export default {
  methods: {
    clickItem (item) {
      if (item.disabled) {
        return
      }
      typeof item.action === 'function' && item.action()
    },
    showSubmenu (event, item) {
      if (item.disabled || !item.children || !item.children.length) {
        return
      }
      const parent = event.target
      const submenu = parent.querySelector('.fine-contextmenu_sub')
      const styleObj = fixSubPosition(parent, submenu)
      for (const key in styleObj) {
        submenu.style[key] = styleObj[key]
      }
      submenu.style.visibility = 'visible'
    },
    hideSubmenu (event, item) {
      if (item.disabled || !item.children || !item.children.length) {
        return
      }
      event.target.querySelector('.fine-contextmenu_sub').style.visibility = 'hidden'
    }
  }
}
