import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// declare module '*.css';
import './index.css';
import Navbar from './components/Navbar.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
  </StrictMode>,
);
