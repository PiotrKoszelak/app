import { useAppSelector } from '../../store/hooks';
import { selectLanguage, selectSelectedMenu } from '../../store/globalSlice';

import styled from 'styled-components';
import { titlesText, detailsText } from '../../utils/i18n';

const StyledTextElement = styled.div<StyledTextElementProps>`
    position: absolute;
    transition: left 2s;
    top: 300px;
    font-size: 50px;
    max-width: 500px;
    left: ${(props) => 420 - props.selectedMenu * props.shift + 'px'};
    @media (max-width: 768px) {
        max-width: 80%;
        left: 10%;
        font-size: 30px;
    }
`;

const StyledDetailsElement = styled.div`
    top: 400px;
    font-size: 30px;
    color: #666d75;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

interface TextElementProps {
    shift: number;
}

interface StyledTextElementProps extends TextElementProps {
    selectedMenu: number;
}

const TextElement = (props: TextElementProps) => {
    const { shift } = props;

    const selectedMenu = useAppSelector(selectSelectedMenu);
    const selectedLanguage = useAppSelector(selectLanguage);

    return (
        <StyledTextElement selectedMenu={selectedMenu} shift={shift}>
            {titlesText[selectedLanguage][selectedMenu]}
            <StyledDetailsElement>
                {detailsText[selectedLanguage][selectedMenu]}
            </StyledDetailsElement>
        </StyledTextElement>
    );
};

export default TextElement;
