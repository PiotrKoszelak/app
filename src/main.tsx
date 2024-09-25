import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store.ts';

import { Paths } from './utils/constants.ts';

import App from './App.tsx';
import MortgageApp from './components/apps/mortgage/main.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path={Paths.calculator} element={<MortgageApp />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
