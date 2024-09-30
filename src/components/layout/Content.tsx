import { useAppSelector } from '../../store/hooks';
import {
    selectSelectedMenu,
    selectTranslations,
} from '../../store/globalSlice';

import { MenuList } from '../../utils/constants';

import styled from 'styled-components';
import AppMenu from '../apps/AppMenu';

const StyledContentElement = styled.div<StyledContentElementProps>`
    position: absolute;
    transition: left 2s;
    top: 25%;
    font-size: 50px;
    width: 500px;
    text-align: center;
    left: ${(props) => 380 - props.selectedMenu * props.shift + 'px'};
    @media (max-width: 992px) {
        width: 350px;
    }
    @media (max-width: 768px) {
        width: 70%;
        left: ${(props) => 150 - (props.selectedMenu * props.shift) / 2 + 'px'};
        font-size: 40px;
    }
    @media (max-width: 600px) {
        width: 60%;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        left: ${(props) => 150 - (props.selectedMenu * props.shift) / 2 + 'px'};
        font-size: 30px;
        width: 200px;
    }
`;

const StyledDetailsElement = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: #666d75;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        font-size: 18px;
    }
`;

interface ContentElementProps {
    shift: number;
}

interface StyledContentElementProps extends ContentElementProps {
    selectedMenu: MenuList;
}

const Content = (props: ContentElementProps) => {
    const { shift } = props;

    const selectedMenu = useAppSelector(selectSelectedMenu);
    const selectedTranslations = useAppSelector(selectTranslations);

    const Details = () => {
        if (selectedMenu === MenuList.app) {
            return <AppMenu />;
        }
        return <span>{selectedTranslations.details[selectedMenu]}</span>;
    };

    return (
        <StyledContentElement selectedMenu={selectedMenu} shift={shift}>
            {selectedTranslations.title[selectedMenu]}
            <StyledDetailsElement>
                <Details />
            </StyledDetailsElement>
        </StyledContentElement>
    );
};

export default Content;
