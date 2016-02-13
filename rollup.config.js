import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/loop.js',
  plugins: [
    babel()
  ],
  format: 'cjs',
  moduleName: 'loop',
  dest: 'lib/loop.js'
}
