import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const extensions = ['.ts', '.js']

const preventThreeShakingPlugin = () => {
  return {
    name: 'no-threeshaking',
    resolveId(id, importer) {
      if (!importer) {
        return { id, moduleSideEffects: 'no-treeshake' }
      }
      return null
    },
  }
}

export default {
  input: './src/main.ts',
  output: {
    file: './dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    preventThreeShakingPlugin(),
    nodeResolve({
      extensions,
    }),
    babel({ extensions, babelHelpers: 'runtime' }),
  ],
}
