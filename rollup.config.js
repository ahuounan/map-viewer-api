import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import tsconfig from './tsconfig.json';

const aliasEntries = Object.entries(tsconfig.compilerOptions.paths).map(
  ([k, v]) => ({
    find: k,
    replacement: v[0],
  })
);

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    alias({ entries: aliasEntries }),
    terser(),
    cleanup({
      comments: 'none',
    }),
  ],
};
