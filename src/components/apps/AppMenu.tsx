import AppCard from './AppCard';

import { AppList } from '../../utils/constants';

import styled from 'styled-components';
import MortgageImage from '../../assets/mortgage.png';
import MapImage from '../../assets/map.png';

const StyledContainer = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 600px) {
        justify-content: start;
    }
    @media (max-width: 600px) {
        align-items: start;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        align-items: start;
    }
`;

export default function AppMenu() {
    return (
        <StyledContainer role="list">
            <AppCard
                image={MortgageImage}
                title={AppList.mortgageCalculator}
                link="https://www.justfin.site/"
            />
            <AppCard image={MapImage} title={AppList.map} disabled />
        </StyledContainer>
    );
}
