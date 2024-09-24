import { LanguageList, MenuList } from './constants';

export const titlesText = {
    [LanguageList.en]: {
        [MenuList.main]: "Hello, I'm Piotr",
        [MenuList.app]: 'List of applications',
        [MenuList.contact]: 'Contact',
    },
    [LanguageList.pl]: {
        [MenuList.main]: 'Cześć, jestem Piotr',
        [MenuList.app]: 'Lista aplikacji',
        [MenuList.contact]: 'Kontakt',
    },
};

export const detailsText = {
    [LanguageList.en]: {
        [MenuList.main]:
            "I'm a software developer and this page presents my solutions that are created for having fun",
        [MenuList.contact]: 'koszelak.piotr@gmail.com',
    },
    [LanguageList.pl]: {
        [MenuList.main]:
            'Jestem programistą, a na tej stronie możesz znaleźć moje rozwiązania, które tworzę dla zabawy',
        [MenuList.contact]: 'koszelak.piotr@gmail.com',
    },
};

export const footerText = {
    [LanguageList.en]: 'Some graphics are designed by',
    [LanguageList.pl]: 'Niektóre grafiki zostały stworzone przez',
};
