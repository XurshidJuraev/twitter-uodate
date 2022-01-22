import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from './Context/Localization'
import { Provider as ThemeProvider } from './Context/Theme'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Provider>
                    <App />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
