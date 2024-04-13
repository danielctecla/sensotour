import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { inspectorServer as ReactDevInspector } from 'react-dev-inspector/plugins/vite'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@components/': `${path.resolve(__dirname, 'src', 'components')}/`,
      '@hooks/': `${path.resolve(__dirname, 'src', 'hooks')}/`,
      '@utils/': `${path.resolve(__dirname, 'src', 'utils')}/`,
      '@config/': `${path.resolve(__dirname, 'src', 'config')}/`,
      '@assets/': `${path.resolve(__dirname, 'src', 'assets')}/`,
      '@data/': `${path.resolve(__dirname, 'src', 'data')}/`,
    },
  },
  plugins: [
    // Do not change order of these two
    Unocss(),
    react(),

    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ['react', 'react-router-dom', 'react-i18next', 'ahooks'],
      dts: './src/auto-imports.d.ts',
      dirs: ['src/components/**/*', 'src/hooks'],
      defaultExportByFilename: true,
      resolvers: [],
      eslintrc: {
        enabled: false,
      },
    }),
    ReactDevInspector(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Visita Mexico',
        short_name: 'Visit Mexico',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    Pages({
      routeStyle: 'remix',
    }),
    svgr(),
  ],
})
