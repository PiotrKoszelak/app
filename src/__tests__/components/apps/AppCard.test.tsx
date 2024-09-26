import { screen, waitFor } from '@testing-library/react';
import userEvent, {
    PointerEventsCheckLevel,
} from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';

import { AppList, LanguageList, Paths } from '../../../utils/constants';
import {
    appPlaceholder,
    appsDescription,
    appsTitle,
} from '../../../utils/i18n';

import AppCard from '../../../components/apps/AppCard';
import App from '../../../App';
import MortgageImage from '../../../assets/mortgage.png';

test('Displays proper texts', () => {
    renderWithProviders(
        <AppCard
            image={MortgageImage}
            title={AppList.mortgageCalculator}
            path={Paths.calculator}
        />
    );

    expect(
        screen.getByText(appsTitle[AppList.mortgageCalculator][LanguageList.en])
    ).toBeInTheDocument();
    expect(
        screen.getByText(
            appsDescription[AppList.mortgageCalculator][LanguageList.en]
        )
    ).toBeInTheDocument();
});

test('Displays proper texts after language change', async () => {
    renderWithProviders(<App />);

    const appsButton = screen.getByRole('button', { name: /Apps/i });
    userEvent.click(appsButton);

    expect(
        await screen.findByText(
            appsTitle[AppList.mortgageCalculator][LanguageList.en]
        )
    ).toBeInTheDocument();
    expect(
        await screen.findByText(
            appsDescription[AppList.mortgageCalculator][LanguageList.en]
        )
    ).toBeInTheDocument();

    const plButton = screen.getByText('Pl');
    userEvent.click(plButton);

    expect(
        await screen.findByText(
            appsTitle[AppList.mortgageCalculator][LanguageList.pl]
        )
    ).toBeInTheDocument();
    expect(
        await screen.findByText(
            appsDescription[AppList.mortgageCalculator][LanguageList.pl]
        )
    ).toBeInTheDocument();
});

test('Shows card as disabled', async () => {
    renderWithProviders(
        <AppCard
            image={MortgageImage}
            title={AppList.mortgageCalculator}
            path={Paths.calculator}
            disabled
        />
    );

    const card = screen.getByRole('button');
    userEvent.click(card, {
        pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    await waitFor(() => {
        expect(
            screen.queryByText(appPlaceholder[LanguageList.en])
        ).not.toBeInTheDocument();
    });
});

test('Navigate to a new page', async () => {
    renderWithProviders(
        <AppCard
            image={MortgageImage}
            title={AppList.mortgageCalculator}
            path={Paths.calculator}
        />
    );

    const card = screen.getByRole('button');
    userEvent.click(card);

    expect(
        await screen.findByText(appPlaceholder[LanguageList.en])
    ).toBeInTheDocument();
});
