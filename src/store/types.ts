import { LanguageList, MenuList } from '../utils/constants';

export interface GlobalState {
    language: LanguageList;
    selectedMenu: MenuList;
}

export interface State {
    global: GlobalState;
}
