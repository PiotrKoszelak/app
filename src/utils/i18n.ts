import { LanguageList, MenuList } from './constants';

export const titlesText = {
    [MenuList.main]: {
        [LanguageList.en]: "Hello, I'm Piotr",
        [LanguageList.pl]: 'Cześć, jestem Piotr',
    },
    [MenuList.app]: {
        [LanguageList.en]: 'List of applications',
        [LanguageList.pl]: 'Lista aplikacji',
    },
    [MenuList.contact]: {
        [LanguageList.en]: 'Contact',
        [LanguageList.pl]: 'Kontakt',
    },
};

export const detailsText = {
    [MenuList.main]: {
        [LanguageList.en]:
            "I'm a software developer and this page presents my solutions that are created for having fun",
        [LanguageList.pl]:
            'Jestem programistą, a na tej stronie możesz znaleźć moje rozwiązania, które tworzę dla zabawy',
    },
    [MenuList.contact]: {
        [LanguageList.en]: 'koszelak.piotr@gmail.com',
        [LanguageList.pl]: 'koszelak.piotr@gmail.com',
    },
};

export const footerText = {
    [LanguageList.en]: 'Some graphics are designed by',
    [LanguageList.pl]: 'Niektóre grafiki zostały stworzone przez',
};
