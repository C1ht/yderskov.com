import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			adapter: adapter({
				// 'out' matches the Cloudflare Pages build configuration that the
				// previous Next.js site used — both hosts now build to the same dir.
				pages: 'out',
				assets: 'out',
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			prerender: {
				handleHttpError: 'warn'
			}
		})
	]
});
