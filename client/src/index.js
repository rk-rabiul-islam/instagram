import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import AuthContextProviders from './components/Auth/providers/AuthContextProviders';
import LoaderContextProviders from './components/AllContexts/providers/LoaderContextProviders';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProviders>
        <LoaderContextProviders>
          <App />  
        </LoaderContextProviders>
      </AuthContextProviders>
    </BrowserRouter>
  </React.StrictMode>
);


