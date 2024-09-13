import { styled } from '@mui/material/styles';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: 'transparent',
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
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </StyledBottomNavigation>
    );
};

export default MenuBar;
