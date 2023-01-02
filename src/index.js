import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupWorker } from "msw";
import { handlers } from "./services/mocks/handlers";
import './index.css';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const worker = setupWorker(...handlers)
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);