import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

import MenuBar from '../../../components/menu/MenuBar';

test('Displays all buttons', () => {
    renderWithProviders(<MenuBar />);

    expect(screen.getAllByRole('button')).toHaveLength(5);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Apps')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('Displays only language buttons when being inside app', () => {
    renderWithProviders(<MenuBar isApp />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Apps')).not.toBeInTheDocument();
    expect(screen.queryByText('Contact')).not.toBeInTheDocument();
});

test('Stores proper default manu', async () => {
    renderWithProviders(<MenuBar />);

    expect(screen.getByText('Home')).toHaveClass('Mui-selected');
    expect(screen.getByText('Apps')).not.toHaveClass('Mui-selected');
    expect(screen.getByText('Contact')).not.toHaveClass('Mui-selected');
});

test('Updates menu value  properly', async () => {
    renderWithProviders(<MenuBar />);

    expect(screen.getByText('Home')).toHaveClass('Mui-selected');
    expect(screen.getByText('Apps')).not.toHaveClass('Mui-selected');
    expect(screen.getByText('Contact')).not.toHaveClass('Mui-selected');

    const appsButton = screen.getByText('Apps');
    userEvent.click(appsButton);

    await waitFor(() => {
        expect(screen.getByText('Home')).not.toHaveClass('Mui-selected');
        expect(screen.getByText('Apps')).toHaveClass('Mui-selected');
        expect(screen.getByText('Contact')).not.toHaveClass('Mui-selected');
    });
});
