import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/main.ts",
  output: {
    esModule: false,
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [typescript()]
};
