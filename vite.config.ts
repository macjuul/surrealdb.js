import dts from "vite-plugin-dts";
import { defineConfig } from 'vite';

export default defineConfig(e => ({
	plugins: [dts()],
	publicDir: e.command == 'serve' ? 'public' : false,
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'surrealdb',
			fileName: 'surrealdb'
		},
		rollupOptions: {
			external: ['zod'],
			output: {
				globals: {
					'zod': 'Zod'
				},
			},
		}
	}
}))