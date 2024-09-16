import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import { GlobalState } from './types';
import { Language } from './constants';

const initialState: GlobalState = {
    language: Language.en,
    selectedMenu: 0,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload;
        },
        changeMenu: (state, action: PayloadAction<number>) => {
            state.selectedMenu = action.payload;
        },
    },
});

export const { changeLanguage, changeMenu } = globalSlice.actions;

export const selectLanguage = (state: RootState) => state.global.language;
export const selectSelectedMenu = (state: RootState) =>
    state.global.selectedMenu;

export default globalSlice.reducer;
