import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './CyclePage/Clock';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

function Clocks() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
