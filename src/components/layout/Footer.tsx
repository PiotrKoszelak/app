import { useAppSelector } from '../../store/hooks';
import { selectLanguage } from '../../store/globalSlice';

import { footerText } from '../../utils/i18n';

import styled from 'styled-components';

const StyledText = styled.div`
    position: absolute;
    height: fit-content;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    gap: 5px;
`;

const Footer = () => {
    const selectedLanguage = useAppSelector(selectLanguage);

    return (
        <StyledText>
            {footerText[selectedLanguage]}
            <a href="https://www.freepik.com/" target="_blank">
                Freepik
            </a>
        </StyledText>
    );
};

export default Footer;
