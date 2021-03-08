import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    typescript(),
    postcss({
      extract: true
    })
  ],
  external: ['react', 'react-dom']
}
