import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import { AppStore, RootState, setupStore } from '../store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
) {
    const {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    } = extendedRenderOptions;

    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={children} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );

    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}
