import { useAppSelector } from '../../store/hooks';
import { selectSelectedMenu } from '../../store/globalSlice';

import styled from 'styled-components';

const StyledMovingElement = styled.div<StyledMovingElementProps>`
    position: absolute;
    background-image: url(${(props) => props.image});
    background-position: ${(props) => -props.selectedMenu * props.shift + 'px'};
    transition: background-position 2s;
    width: 100%;
    height: 100%;
    background-size: cover;
    @media (max-width: 768px) {
        background-position: calc(
            10% + ${(props) => -props.selectedMenu * props.shift + 'px'}
        );
    }
`;

interface MovingElementProps {
    shift: number;
    image: string;
}

interface StyledMovingElementProps extends MovingElementProps {
    selectedMenu: number;
}

const MovingElement = (props: MovingElementProps) => {
    const { shift, image } = props;

    const selectedMenu = useAppSelector(selectSelectedMenu);

    return (
        <StyledMovingElement
            selectedMenu={selectedMenu}
            shift={shift}
            image={image}
        />
    );
};

export default MovingElement;
