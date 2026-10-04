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
