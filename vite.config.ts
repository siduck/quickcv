import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';

export default defineConfig({
	plugins: [sveltekit(), Unocss()]
});
