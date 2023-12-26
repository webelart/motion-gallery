import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: `@import "./src/global/styles/variables.scss";`
			}
		}
	},
});
