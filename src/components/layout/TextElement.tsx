import styled from 'styled-components';

const StyledTextElement = styled.div<TextElementProps>`
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
    selectedMenu: number;
    shift: number;
}

const titles = [
    'Welcome!',
    'This is first page',
    'Another example of the text',
];

const TextElement = (props: TextElementProps) => {
    const { selectedMenu, shift } = props;

    return (
        <StyledTextElement selectedMenu={selectedMenu} shift={shift}>
            {titles[selectedMenu]}
        </StyledTextElement>
    );
};

export default TextElement;
