import { useAppSelector } from '../../store/hooks';
import { selectLanguage, selectSelectedMenu } from '../../store/globalSlice';

import { titlesText, detailsText } from '../../utils/i18n';
import { MenuList } from '../../utils/constants';

import styled from 'styled-components';

const StyledContentElement = styled.div<StyledContentElementProps>`
    position: absolute;
    transition: left 2s;
    top: 30%;
    font-size: 50px;
    max-width: 500px;
    text-align: center;
    left: ${(props) => 380 - props.selectedMenu * props.shift + 'px'};
    @media (max-width: 768px) {
        max-width: min(80%, 250px);
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
        return <span>{detailsText[selectedLanguage][selectedMenu]}</span>;
    };

    return (
        <StyledContentElement selectedMenu={selectedMenu} shift={shift}>
            {titlesText[selectedLanguage][selectedMenu]}
            <StyledDetailsElement>
                <Details />
            </StyledDetailsElement>
        </StyledContentElement>
    );
};

export default Content;
