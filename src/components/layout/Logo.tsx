import styled from 'styled-components';
import LogoPNG from '../../assets/logo_big.png';

const StyledLogo = styled.div`
    position: absolute;
    background-image: url(${LogoPNG});
    width: 100px;
    height: 60px;
`;

const Logo = () => <StyledLogo />;

export default Logo;
