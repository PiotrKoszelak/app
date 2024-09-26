import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';

import {
    backgroundShift,
    LanguageList,
    MenuList,
} from '../../../utils/constants';
import { detailsText, titlesText } from '../../../utils/i18n';

import Content from '../../../components/layout/Content';
import App from '../../../App';

test('Displays proper texts', () => {
    renderWithProviders(<Content shift={backgroundShift} />);

    expect(
        screen.getByText(titlesText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        screen.getByText(detailsText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        screen.queryByText(titlesText[MenuList.app][LanguageList.en])
    ).not.toBeInTheDocument();
    expect(
        screen.queryByText(titlesText[MenuList.contact][LanguageList.en])
    ).not.toBeInTheDocument();
    expect(
        screen.queryByText(detailsText[MenuList.contact][LanguageList.en])
    ).not.toBeInTheDocument();
});

test('Displays proper texts after language change', async () => {
    renderWithProviders(<App />);

    expect(
        screen.getByText(titlesText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        screen.getByText(detailsText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();

    const plButton = screen.getByText('Pl');
    userEvent.click(plButton);

    expect(
        await screen.findByText(titlesText[MenuList.main][LanguageList.pl])
    ).toBeInTheDocument();
    expect(
        await screen.findByText(detailsText[MenuList.main][LanguageList.pl])
    ).toBeInTheDocument();
});

test('Displays proper texts after page change', async () => {
    renderWithProviders(<App />);

    expect(
        screen.getByText(titlesText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        screen.getByText(detailsText[MenuList.main][LanguageList.en])
    ).toBeInTheDocument();

    const contactButton = screen.getByRole('button', { name: /Contact/i });
    userEvent.click(contactButton);

    expect(
        await screen.findByText(titlesText[MenuList.contact][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        await screen.findByText(detailsText[MenuList.contact][LanguageList.en])
    ).toBeInTheDocument();
});

test('Displays apps content', async () => {
    renderWithProviders(<App />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    const appsButton = screen.getByRole('button', { name: /Apps/i });
    userEvent.click(appsButton);

    expect(await screen.findByRole('list')).toBeInTheDocument();
});
