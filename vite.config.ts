import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function devHtmlPlugin(): Plugin {
  return {
    name: 'dev-html-plugin',
    apply: 'serve', // ONLY applies to Vite development server, never build
    transformIndexHtml(html) {
      return html
        .replace(
          /<script type="module" crossorigin src="\.\/assets\/index-[^"]+\.js"><\/script>/g,
          '<script type="module" src="/src/main.tsx"></script>'
        )
        .replace(
          /<link rel="stylesheet" crossorigin href="\.\/assets\/index-[^"]+\.css">/g,
          ''
        );
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [devHtmlPlugin(), react(), tailwindcss()],
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
