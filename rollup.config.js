import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

export default {
  input: 'src/nativetable/nativetable.js',
  external,
  plugins: [
    babel({
      presets: [
        [
          'es2015',
          {
            modules: false
          }
        ]
      ],
      exclude: 'node_modules/**',
      babelrc: false
    }),
    uglify()
  ],
  targets: [
    {
      file: pkg.main,
      name: 'nativetable',
      format: 'umd'
    }
  ]
}
