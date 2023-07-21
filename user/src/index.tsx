import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import {AppRoutes} from "./routing/AppRoutes";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import {AuthProvider, setupAxios} from "./modules/auth";

setupAxios(axios)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
        <AppRoutes/>
    </AuthProvider>
);
