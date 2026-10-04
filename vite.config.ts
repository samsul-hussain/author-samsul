import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanDistHtml(): Plugin {
  return {
    name: 'clean-dist-html',
    transformIndexHtml(html: string) {
      // In built dist/index.html and docs/index.html, strip the unbuilt root redirect
      return html.replace(/\/\/ If GitHub Pages is pointed to repository root \/ instead of \/docs[\s\S]*?}\n\s*}/, '');
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [cleanDistHtml(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
