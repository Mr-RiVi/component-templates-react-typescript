import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { AuthProvider } from '@asgardeo/auth-react';
import authConfig from "./config/authConfig.json"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider config={authConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

//reportWebVitals();
