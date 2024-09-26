import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import { AppStore, RootState, setupStore } from '../store/store';
import { Paths } from '../utils/constants';

import Placeholder from '../components/apps/Placeholder';

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
                    <Route path={Paths.calculator} element={<Placeholder />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );

    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}
