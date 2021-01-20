<template>
  <div class="fine-contextmenu_sub">
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
import mixin from '../lib/mixin'
export default {
  name: 'SubMenu',
  mixins: [mixin],
  props: {
    menus: Array
  }
}
</script>
<style lang="less" scoped>
  .fine-contextmenu_sub{
    min-width: 200px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    border-radius: 4px;
    padding: 8px 0;
    visibility: hidden;
  }
</style>
