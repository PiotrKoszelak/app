import { useAppSelector } from '../../store/hooks';
import { selectSelectedMenu } from '../../store/globalSlice';

import styled from 'styled-components';

const StyledTextElement = styled.div<StyledTextElementProps>`
    position: absolute;
    transition: left 2s;
    top: 300px;
    font-size: 50px;
    max-width: 500px;
    font-family: Lato;
    left: ${(props) => 420 - props.selectedMenu * props.shift + 'px'};
    @media (max-width: 768px) {
        left: calc(
            30% + ${(props) => 420 - props.selectedMenu * props.shift + 'px'}
        );
    }
`;

interface TextElementProps {
    shift: number;
}

interface StyledTextElementProps extends TextElementProps {
    selectedMenu: number;
}

const titles = [
    'Welcome!',
    'This is first page',
    'Another example of the text',
];

const TextElement = (props: TextElementProps) => {
    const { shift } = props;

    const selectedMenu = useAppSelector(selectSelectedMenu);

    return (
        <StyledTextElement selectedMenu={selectedMenu} shift={shift}>
            {titles[selectedMenu]}
        </StyledTextElement>
    );
};

export default TextElement;
