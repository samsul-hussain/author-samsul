// Polyfill window.fetch to provide a setter for browser extensions that monkey-patch fetch
try {
  let activeFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return activeFetch;
    },
    set(fn) {
      activeFetch = fn;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  // Ignore if window.fetch cannot be reconfigured
}

if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      (event.filename && event.filename.includes('chrome-extension://')) ||
      (event.message && event.message.includes('Cannot set property fetch of #<Window>'))
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function renderApp() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      const el = document.getElementById('root');
      if (el) {
        createRoot(el).render(<App />);
      }
    });
  }
}

renderApp();
