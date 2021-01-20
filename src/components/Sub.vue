<template>
  <div class="ns-contextmenu_sub">
    <div v-for="item in menus" :key="item.label" @mouseenter="showSubmenu($event, item)" @mouseleave="hideSubmenu($event, item)" @click="clickItem(item)" :class="['ns-contextmenu__item', {'ns-contextmenu__item--bordered': item.divide}, {'ns-contextmenu__item--disabled': item.disabled}]">
      <div class="ns-contextmenu__icon" v-if="item.icon">
        <i :class="item.icon"></i>
      </div>
      <div class="ns-contextmenu__label">{{item.label}}</div>
      <template v-if="item.children && item.children.length">
        <div class="ns-contextmenu__arrow">
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
  .ns-contextmenu_sub{
    min-width: 200px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    border-radius: 4px;
    padding: 8px 0;
    visibility: hidden;
  }
</style>
