import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const renderedPath = (window as Window & { __PRERENDER_PATH__?: string }).__PRERENDER_PATH__;
if (root.hasChildNodes() && renderedPath === window.location.pathname) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
