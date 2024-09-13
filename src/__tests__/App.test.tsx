import { render, screen } from '@testing-library/react';
import App from '../App';

test('Displays all elements', async () => {
    render(<App />);

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
});
