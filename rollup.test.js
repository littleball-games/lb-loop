import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/loop_spec.js',
  plugins: [
    babel()
  ],
  format: 'cjs',
  moduleName: 'loop',
  dest: 'lib/loop_spec.js'
}
