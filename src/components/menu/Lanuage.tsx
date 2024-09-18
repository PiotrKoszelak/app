import { MouseEvent } from 'react';
import { changeLanguage, selectLanguage } from '../../store/globalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Language } from '../../utils/constants';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function LanguageToggle() {
    const dispatch = useAppDispatch();
    const selectedLanguage = useAppSelector(selectLanguage);

    const handleChange = (_: MouseEvent<HTMLElement>, language: Language) => {
        dispatch(changeLanguage(language));
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={selectedLanguage}
            exclusive
            onChange={handleChange}
            aria-label="Language"
        >
            <ToggleButton value={Language.pl}>Pl</ToggleButton>
            <ToggleButton value={Language.en}>En</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default LanguageToggle;
