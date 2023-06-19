import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': root,
      '@pages': resolve(root, 'components/pages'),
      '@ui': resolve(root, 'components/ui'),
      '@layouts': resolve(root, 'components/layouts'),
      '@features': resolve(root, 'components/features'),
      '@util': resolve(root, 'components/util'),
      '@data': resolve(root, 'data'),
      '@lib': resolve(root, 'lib'),
      '@store': resolve(root, 'store'),
      '@server': resolve(root, 'server'),
    },
  },
  plugins: [react()],
})
