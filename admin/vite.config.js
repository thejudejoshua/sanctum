import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svgr(),
		tailwindcss(),
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	build: {
		rollupOptions: {},
	},
	server: {
		historyApiFallback: true,
	},
	preview: {
		historyApiFallback: true,
	}
})