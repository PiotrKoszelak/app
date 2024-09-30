import { useAppSelector } from '../../store/hooks';
import { selectTranslations } from '../../store/globalSlice';

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
    const selectedTranslations = useAppSelector(selectTranslations);

    return (
        <StyledText>
            {selectedTranslations.footer}
            <a href="https://www.freepik.com/" target="_blank">
                Freepik
            </a>
        </StyledText>
    );
};

export default Footer;
