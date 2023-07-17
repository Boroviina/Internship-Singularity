import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRoutes} from "./routing/AppRoutes";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppRoutes/>
);


