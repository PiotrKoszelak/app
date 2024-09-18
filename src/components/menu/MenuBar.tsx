import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeMenu, selectSelectedMenu } from '../../store/globalSlice';

import { styled } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageToggle from './Lanuage';

const StyledBottomNavigation = styled(BottomNavigation)({
    justifyContent: 'end',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'white',
    backgroundColor: 'rgba(137, 165, 203, 0.20)',
});

const MenuBar = () => {
    const dispatch = useAppDispatch();
    const selectedMenu = useAppSelector(selectSelectedMenu);

    const onSelectedMenuChange = useCallback(
        (menu: number) => {
            dispatch(changeMenu(menu));
        },
        [dispatch]
    );

    return (
        <StyledBottomNavigation
            showLabels
            value={selectedMenu}
            onChange={(_, newValue) => onSelectedMenuChange(newValue)}
            data-testid="menu"
        >
            <StyledBottomNavigationAction label="Home" icon={<HomeIcon />} />
            <StyledBottomNavigationAction label="Apps" icon={<AppsIcon />} />
            <StyledBottomNavigationAction
                label="Contact"
                icon={<AlternateEmailIcon />}
            />
            <LanguageToggle />
        </StyledBottomNavigation>
    );
};

export default MenuBar;
