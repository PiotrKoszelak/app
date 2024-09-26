import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';

import App from '../App';

test('Displays all elements', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('menubar')).toBeInTheDocument();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
});
