import { screen, waitFor } from '@testing-library/react';
import userEvent, {
    PointerEventsCheckLevel,
} from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';

import { AppList } from '../../../utils/constants';
import { translationsEn, translationsPl } from '../../../utils/i18n';

import AppCard from '../../../components/apps/AppCard';
import App from '../../../App';
import MortgageImage from '../../../assets/mortgage.png';

vi.stubGlobal('open', vi.fn());

test('Displays proper texts', () => {
    renderWithProviders(
        <AppCard image={MortgageImage} title={AppList.mortgageCalculator} />
    );

    expect(
        screen.getByText(translationsEn.appsTitle[AppList.mortgageCalculator])
    ).toBeInTheDocument();
    expect(
        screen.getByText(translationsEn.appsTitle[AppList.mortgageCalculator])
    ).toBeInTheDocument();
});

test('Displays proper texts after language change', async () => {
    renderWithProviders(<App />);

    const appsButton = screen.getByRole('button', { name: /Apps/i });
    userEvent.click(appsButton);

    expect(
        await screen.findByText(
            translationsEn.appsTitle[AppList.mortgageCalculator]
        )
    ).toBeInTheDocument();
    expect(
        await screen.findByText(
            translationsEn.appsDescription[AppList.mortgageCalculator]
        )
    ).toBeInTheDocument();

    const plButton = screen.getByText('Pl');
    userEvent.click(plButton);

    expect(
        await screen.findByText(
            translationsPl.appsTitle[AppList.mortgageCalculator]
        )
    ).toBeInTheDocument();
    expect(
        await screen.findByText(
            translationsPl.appsDescription[AppList.mortgageCalculator]
        )
    ).toBeInTheDocument();
});

test('Shows card as disabled', async () => {
    renderWithProviders(
        <AppCard
            image={MortgageImage}
            title={AppList.mortgageCalculator}
            disabled
        />
    );

    const card = screen.getByRole('button');
    userEvent.click(card, {
        pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    expect(
        await screen.findByText(
            translationsEn.appsDescription[AppList.mortgageCalculator]
        )
    ).toBeInTheDocument();
});

test('Navigate to a new page', async () => {
    const spy = vi.spyOn(window, 'open');
    renderWithProviders(
        <AppCard
            image={MortgageImage}
            title={AppList.mortgageCalculator}
            link="https://www.justfin.site/"
        />
    );

    const card = screen.getByRole('button');
    userEvent.click(card);

    await waitFor(() => {
        expect(spy).toBeCalledWith(`https://www.justfin.site/`, '_blank');
    });
});
