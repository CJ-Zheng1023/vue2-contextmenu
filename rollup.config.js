import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
export default {
  input: 'src/index.js',
  output: [{
    file: './dist/vue2-contextmenu.js',
    format: 'umd',
    name: 'vue2-contextmenu',
    globals: {
      'vue-runtime-helpers': 'vueRuntimeHelpers'
    }
  }, {
    file: './dist/vue2-contextmenu.esm.js',
    format: 'es'
  }],
  plugins: [
    commonjs(),
    VuePlugin(),
    terser(),
    copy({
      targets: [
        { src: 'src/styles/fonts', dest: 'dist/styles' }
      ]
    })
  ],
  external: ['vue-runtime-helpers']
}
