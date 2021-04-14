import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/index.ts',
  output: [
    {
      dir: './dist/esm',
      format: 'es',
    },
    {
      dir: './dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    uglify(),
    typescript()
  ]
}