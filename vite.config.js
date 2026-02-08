import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/willyoupleasefuck.me/',
  plugins: [svelte()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      // obfuscate so inspect element skidders cant read it
      // come to github to take a look lmao 
      mangle: {
        toplevel: true,
      },
    },
  },
})