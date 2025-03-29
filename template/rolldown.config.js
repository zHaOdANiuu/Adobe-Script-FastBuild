import { defineConfig } from 'rolldown'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

const hasEnv = process.env.NODE_ENV === 'production'

export default defineConfig({
  input: 'index.tsx',
  treeshake: true,
  output: {
    file: 'dist/main.jsx',
    comments: 'none',
    extend: false,
    intro: `(function(thisObj) {`,
    outro: `}(this))`,
    minify: {
      compress: hasEnv,
      mangle: hasEnv,
      removeWhitespace: hasEnv,
      deadCodeElimination: true
    }
  },
  plugins: [typescript()],
  inject: {
    atob: path.resolve('./inc/atob.jsxinc'),
    btoa: path.resolve('./inc/btoa.jsxinc'),
    JSON: path.resolve('./inc/JSON.jsxinc'),
    cancelTimeout: path.resolve('./inc/cancelTimeout.jsxinc'),
    clearInterval: path.resolve('./inc/clearInterval.jsxinc'),
    setInterval: path.resolve('./inc/setInterval.jsxinc'),
    setTimeout: path.resolve('./inc/setTimeout.jsxinc')
  },
  define: {},
  moduleTypes: {
    '.jsxinc': 'jsx',
    '.jsxbin': 'jsx',
    '.res': 'text',
    '.json': 'json',
    '.jgp': 'base64',
    '.png': 'base64',
    '.ffx': 'base64',
    '.aep': 'base64'
  }
})
