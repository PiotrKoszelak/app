import { Language } from './constants';

export interface GlobalState {
    language: Language;
    selectedMenu: number;
}

export interface State {
    global: GlobalState;
}
