import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';

import { backgroundShift, MenuList } from '../../../utils/constants';
import { translationsEn, translationsPl } from '../../../utils/i18n';

import Content from '../../../components/layout/Content';
import App from '../../../App';

test('Displays proper texts', () => {
    renderWithProviders(<Content shift={backgroundShift} />);

    expect(
        screen.getByText(translationsEn.title[MenuList.main])
    ).toBeInTheDocument();
    expect(
        screen.getByText(translationsEn.details[MenuList.main])
    ).toBeInTheDocument();
    expect(
        screen.queryByText(translationsEn.title[MenuList.app])
    ).not.toBeInTheDocument();
    expect(
        screen.queryByText(translationsEn.title[MenuList.contact])
    ).not.toBeInTheDocument();
    expect(
        screen.queryByText(translationsEn.details[MenuList.contact])
    ).not.toBeInTheDocument();
});

test('Displays proper texts after language change', async () => {
    renderWithProviders(<App />);

    expect(
        screen.getByText(translationsEn.title[MenuList.main])
    ).toBeInTheDocument();
    expect(
        screen.getByText(translationsEn.details[MenuList.main])
    ).toBeInTheDocument();

    const plButton = screen.getByText('Pl');
    userEvent.click(plButton);

    expect(
        await screen.findByText(translationsPl.title[MenuList.main])
    ).toBeInTheDocument();
    expect(
        await screen.findByText(translationsPl.details[MenuList.main])
    ).toBeInTheDocument();
});

test('Displays proper texts after page change', async () => {
    renderWithProviders(<App />);

    expect(
        screen.getByText(translationsEn.title[MenuList.main])
    ).toBeInTheDocument();
    expect(
        screen.getByText(translationsEn.details[MenuList.main])
    ).toBeInTheDocument();

    const contactButton = screen.getByRole('button', { name: /Contact/i });
    userEvent.click(contactButton);

    expect(
        await screen.findByText(translationsEn.title[MenuList.contact])
    ).toBeInTheDocument();
    expect(
        await screen.findByText(translationsEn.details[MenuList.contact])
    ).toBeInTheDocument();
});

test('Displays apps content', async () => {
    renderWithProviders(<App />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    const appsButton = screen.getByRole('button', { name: /Apps/i });
    userEvent.click(appsButton);

    expect(await screen.findByRole('list')).toBeInTheDocument();
});
