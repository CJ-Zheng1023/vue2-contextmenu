<template>
  <div ref="contextmenu" @contextmenu.prevent="" :style="{left: realX + 'px', top: realY +'px'}" :class="['fine-contextmenu', {'fine-contextmenu--show': visible}]">
    <div v-for="item in menus" :key="item.label" @mouseenter="showSubmenu($event, item)" @mouseleave="hideSubmenu($event, item)" @click="clickItem(item)" :class="['fine-contextmenu__item', {'fine-contextmenu__item--bordered': item.divide}, {'fine-contextmenu__item--disabled': item.disabled}]">
      <div class="fine-contextmenu__icon" v-if="item.icon">
        <i :class="item.icon"></i>
      </div>
      <div class="fine-contextmenu__label">{{item.label}}</div>
      <template v-if="item.children && item.children.length">
        <div class="fine-contextmenu__arrow">
          <i class="iconfont arrow-right"></i>
        </div>
        <sub-menu :menus="item.children"></sub-menu>
      </template>
    </div>
  </div>
</template>
<script>
import { fixPosition } from '../lib/helpers'
import SubMenu from './Sub.vue'
import mixin from '../lib/mixin'
export default {
  name: 'Contextmenu',
  components: {
    SubMenu
  },
  mixins: [mixin],
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    menus: Array,
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      realX: 0,
      realY: 0
    }
  },
  computed: {
    axisStr () {
      return this.x + ',' + this.y
    }
  },
  watch: {
    axisStr (newVal) {
      // 容器display属性为block时才能获取宽高，所有加了延迟
      this.$nextTick(_ => {
        const { realX, realY } = fixPosition(this.x, this.y, this.$refs.contextmenu)
        this.realX = realX
        this.realY = realY
        this.$refs.contextmenu.style.visibility = 'visible'
      })
    }
  },
  mounted () {
    window.addEventListener('click', this.close)
    window.addEventListener('scroll', this.close)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.close)
    window.removeEventListener('scroll', this.close)
  },
  methods: {
    close (e) {
      if (e.which === 3) {
        return
      }
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
  .fine-contextmenu{
    min-width: 200px;
    position: fixed;
    z-index: 9999;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    border-radius: 4px;
    padding: 8px 0;
    visibility: hidden;
    display: none;
    &.fine-contextmenu--show{
      display: block;
    }
  }
</style>
