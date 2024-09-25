import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeMenu, selectSelectedMenu } from '../../store/globalSlice';
import { MenuList } from '../../utils/constants';

import { styled } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageToggle from './Lanuage';

const StyledBottomNavigation = styled(BottomNavigation)({
    justifyContent: 'end',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
    color: white;
    background-color: rgba(137, 165, 203, 0.2);
    @media (max-width: 768px) {
        max-width: 50px;
    }
`;

interface MenuBarProps {
    isApp?: boolean;
}

const MenuBar = (props: MenuBarProps) => {
    const { isApp } = props;

    const dispatch = useAppDispatch();
    const selectedMenu = useAppSelector(selectSelectedMenu);

    const onSelectedMenuChange = useCallback(
        (menu: MenuList) => {
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
            {!isApp && (
                <StyledBottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                />
            )}
            {!isApp && (
                <StyledBottomNavigationAction
                    label="Apps"
                    icon={<AppsIcon />}
                />
            )}
            {!isApp && (
                <StyledBottomNavigationAction
                    label="Contact"
                    icon={<AlternateEmailIcon />}
                />
            )}
            <LanguageToggle />
        </StyledBottomNavigation>
    );
};

export default MenuBar;
