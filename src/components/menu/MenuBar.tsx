import { styled } from '@mui/material/styles';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const StyledBottomNavigation = styled(BottomNavigation)({
    justifyContent: 'end',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'white',
    backgroundColor: 'rgba(137, 165, 203, 0.20)',
});

interface MenuBarProps {
    selectedMenu: number;
    onSelectedMenuChange: (value: number) => void;
}

const MenuBar = (props: MenuBarProps) => {
    const { selectedMenu, onSelectedMenuChange } = props;

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
        </StyledBottomNavigation>
    );
};

export default MenuBar;
