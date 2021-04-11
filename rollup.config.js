import typescript from 'rollup-plugin-typescript2';

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
    typescript()
  ]
}