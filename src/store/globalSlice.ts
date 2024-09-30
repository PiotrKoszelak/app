import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import { GlobalState } from './types';
import { LanguageList, MenuList } from '../utils/constants';
import { translationsEn, translationsPl } from '../utils/i18n';

const initialState: GlobalState = {
    language: LanguageList.en,
    selectedMenu: MenuList.main,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<LanguageList>) => {
            state.language = action.payload;
        },
        changeMenu: (state, action: PayloadAction<MenuList>) => {
            state.selectedMenu = action.payload;
        },
    },
});

export const { changeLanguage, changeMenu } = globalSlice.actions;

export const selectLanguage = (state: RootState) => state.global.language;
export const selectSelectedMenu = (state: RootState) =>
    state.global.selectedMenu;

export const selectTranslations = (state: RootState) =>
    state.global.language === LanguageList.en ? translationsEn : translationsPl;

export default globalSlice.reducer;
