import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
import AppointmentProvider from './context/AppointmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppointmentProvider>
      <App />
    </AppointmentProvider>
  </React.StrictMode>
);
