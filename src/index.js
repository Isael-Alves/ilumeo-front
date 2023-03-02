import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';
import { AuthProvider } from './providers/auth.js';

const rootElement = document.getElementById('root');
createRoot(rootElement).render( 
<AuthProvider>
    <App />
</AuthProvider>
);