import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import path from 'path'

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'components',
        replacement: path.resolve(projectRootDir, 'src/components'),
      },
      {
        find: 'services',
        replacement: path.resolve(projectRootDir, 'src/services'),
      },
    ],
  },
  plugins: [reactRefresh()],
})
