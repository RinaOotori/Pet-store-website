import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        // vite config
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // define: {
        //     __APP_ENV__: JSON.stringify(env.APP_ENV),
        // },
        server: {
            // port: 5173,
            proxy: {
                '/api': {
                    target: env.VITE_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, '')
                }
            },
            // hmr: {
            //     port: 5173,
            //     clientPort: 5173,
            //     host: 'localhost'
            // },
            // cors: false,
        },
    }
})
