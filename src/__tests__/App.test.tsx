import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';

import App from '../App';

test('Displays all elements', async () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
});
