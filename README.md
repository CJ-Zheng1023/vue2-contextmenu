# vue2-contextmenu

## 安装
```
yarn add @cj_zheng1023/vue2-contextmenu
```

或

```
npm install @cj_zheng1023/vue2-contextmenu
```

### 使用

1. 引入库和样式

   ```javascript
   import Contextmenu from 'vue2-contextmenu'
   import 'vue2-contextmenu/dist/styles/styles.css'
   Vue.use(Contextmenu)
   ```

2. vue组件

   ```vue
   <temlate>
   	<div @contextmenu.prevent="contextmenu">
           <contextmenu @close="visible = false" :menus="menus" :visible="visible" :x="x" :y="y">
           </contextmenu>
           ... ...
           ... ...
       </div>
   </temlate>
   <script>
   	export default {
           data() {
               return {
                   visible: false,
                   menus: [{
                       label: '清除',
                       icon: ['ns', 'ns-clear'],
                       disabled: true,
                       action: _ => {
                           alert('copy')
                       }
                   }, {
                       label: '打印',
                       icon: ['ns', 'ns-print'],
                       divide: true,
                       action: _ => {
                           alert('paste')
                       }
                   }, {
                       label: '菜单',
                       icon: ['ns', 'ns-history'],
                       children: [{
                           label: '菜单1',
                           icon: ['ns', 'ns-history']
                       }, {
                           label: '菜单2',
                           icon: ['ns', 'ns-history']
                       }]
                   }],
                   x: 0,
                   y: 0
               }
           },
           methods: {
               contextmenu(e) {
                   this.x = e.clientX
         			this.y = e.clientY
         			this.visible = true
               }
           }
       }
   </script>
   ```

### 开发

```
yarn dev
```

或

```
npm run dev
```



### 构建

```
yarn build
```

或

```
npm run build
```

