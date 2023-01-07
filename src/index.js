import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupWorker } from "msw";
import { MSWHandlers } from "./services/mockApi";
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const serviceWorker = setupWorker(...MSWHandlers)
  serviceWorker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);