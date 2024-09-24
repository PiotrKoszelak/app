import AppCard from './AppCard';

import { AppList } from '../../utils/constants';

import styled from 'styled-components';
import MortgageImage from '../../assets/mortgage.png';
import MapImage from '../../assets/map.png';

const StyledContainer = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export default function AppMenu() {
    return (
        <StyledContainer>
            <AppCard image={MortgageImage} title={AppList.mortgageCalculator} />
            <AppCard image={MapImage} title={AppList.map} />
        </StyledContainer>
    );
}
