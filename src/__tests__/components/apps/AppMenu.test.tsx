import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

import AppMenu from '../../../components/apps/AppMenu';

test('Displays proper number of app cards', () => {
    renderWithProviders(<AppMenu />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
});
