import styled from 'styled-components';

const StyledMovingElement = styled.div<MovingElementProps>`
    position: absolute;
    background-image: url(${(props) => props.image});
    background-position: ${(props) => -props.selectedMenu * props.shift + 'px'};
    transition: background-position 2s;
    width: 100%;
    height: 100%;
    background-size: cover;
    @media (max-width: 768px) {
        background-position: calc(
            30% + ${(props) => -props.selectedMenu * props.shift + 'px'}
        );
    }
`;

interface MovingElementProps {
    selectedMenu: number;
    shift: number;
    image: string;
}

const MovingElement = (props: MovingElementProps) => {
    const { selectedMenu, shift, image } = props;

    return (
        <StyledMovingElement
            selectedMenu={selectedMenu}
            shift={shift}
            image={image}
        />
    );
};

export default MovingElement;
