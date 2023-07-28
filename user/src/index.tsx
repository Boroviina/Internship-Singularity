import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import 'bootstrap/dist/js/bootstrap';
import './customStyle/custom.scss'
import {AppRoutes} from "./routing/AppRoutes";
import {AuthProvider, setupAxios} from "./modules/auth";
import {ThemeContextProvide} from "./theme-context/ThemeContext";

setupAxios(axios)


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeContextProvide>
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    </ThemeContextProvide>
);
