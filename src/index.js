import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
<<<<<<< HEAD
=======
import { createRoot } from 'react-dom/client'; // Importar createRoot desde react-dom/client
>>>>>>> codespace-stunning-xylophone-j6vwgwpjqgphq9qv

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals.
reportWebVitals();
