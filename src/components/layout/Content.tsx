import { useAppSelector } from '../../store/hooks';
import { selectLanguage, selectSelectedMenu } from '../../store/globalSlice';

import { titlesText, detailsText } from '../../utils/i18n';
import { MenuList } from '../../utils/constants';

import styled from 'styled-components';
import AppMenu from '../apps/AppMenu';

const StyledContentElement = styled.div<StyledContentElementProps>`
    position: absolute;
    transition: left 2s;
    top: 30%;
    font-size: 50px;
    width: min(500px, 60%);
    text-align: center;
    left: ${(props) => 380 - props.selectedMenu * props.shift + 'px'};
    @media (max-width: 768px) {
        max-width: 80%;
        left: ${(props) => 150 - (props.selectedMenu * props.shift) / 2 + 'px'};
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

interface ContentElementProps {
    shift: number;
}

interface StyledContentElementProps extends ContentElementProps {
    selectedMenu: MenuList;
}

const Content = (props: ContentElementProps) => {
    const { shift } = props;

    const selectedMenu = useAppSelector(selectSelectedMenu);
    const selectedLanguage = useAppSelector(selectLanguage);

    const Details = () => {
        if (selectedMenu === MenuList.app) {
            return <AppMenu />;
        }
        return <span>{detailsText[selectedMenu][selectedLanguage]}</span>;
    };

    return (
        <StyledContentElement selectedMenu={selectedMenu} shift={shift}>
            {titlesText[selectedMenu][selectedLanguage]}
            <StyledDetailsElement>
                <Details />
            </StyledDetailsElement>
        </StyledContentElement>
    );
};

export default Content;
