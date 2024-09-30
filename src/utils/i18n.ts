import { AppList, MenuList } from './constants';

export const translationsEn = {
    title: {
        [MenuList.main]: "Hello, I'm Piotr",
        [MenuList.app]: 'List of applications',
        [MenuList.contact]: 'Contact',
    },
    details: {
        [MenuList.main]:
            "I'm a software developer and this page presents my solutions that are created for having fun",
        [MenuList.contact]: 'koszelak.piotr@gmail.com',
    },
    footer: 'Some graphics are designed by',
    appsTitle: {
        [AppList.mortgageCalculator]: 'Mortgage calculator',
        [AppList.map]: 'Maps',
    },
    appsDescription: {
        [AppList.mortgageCalculator]:
            'Use it to calculate your mortgage installment',
        [AppList.map]: 'Use it to analyze geospatial data',
    },
    appPlaceholder: 'Application is under development',
};

export const translationsPl = {
    title: {
        [MenuList.main]: 'Cześć, jestem Piotr',
        [MenuList.app]: 'Lista aplikacji',
        [MenuList.contact]: 'Kontakt',
    },
    details: {
        [MenuList.main]:
            'Jestem programistą, a na tej stronie możesz znaleźć moje rozwiązania, które tworzę dla zabawy',
        [MenuList.contact]: 'koszelak.piotr@gmail.com',
    },
    footer: 'Niektóre grafiki zostały stworzone przez',
    appsTitle: {
        [AppList.mortgageCalculator]: 'Kalkulator kredytu hipotecznego',
        [AppList.map]: 'Mapy',
    },
    appsDescription: {
        [AppList.mortgageCalculator]: 'Oblicz ratę swojego kredytu',
        [AppList.map]: 'Analizuj dane przestrzenne',
    },
    appPlaceholder: 'Aplikacja w budowie',
};
