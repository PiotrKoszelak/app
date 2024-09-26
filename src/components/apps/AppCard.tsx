import { useAppSelector } from '../../store/hooks';
import { selectLanguage } from '../../store/globalSlice';

import { appsDescription, appsTitle } from '../../utils/i18n';
import { AppList, Paths } from '../../utils/constants';

import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)<StyledCardProps>`
    background-color: ${(props) =>
        props.disabled
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(255, 255, 255, 0.7)'} !important;

    border-radius: 20px !important;
    width: 50%;
    height: 90%;
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.9) !important;
    }
    @media (max-width: 600px) {
        height: 70%;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        height: 50%;
    }
`;

const StyledCardMedia = styled(CardMedia)`
    background-size: initial !important;
    height: 100px;
    @media (max-width: 768px) {
        height: 70px;
    }
    @media (max-width: 600px) {
        display: none !important;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        display: none !important;
    }
`;

const StyledAppName = styled.div`
    font-size: 20px;
    font-weight: bold;
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        font-size: 15px;
    }
`;

const StyledAppDescription = styled.div`
    font-size: 15px;
    margin-top: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
    @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
        font-size: 12px;
    }
`;

interface AppCardProps {
    title: AppList;
    image: string;
    path: Paths;
    disabled?: boolean;
}

type StyledCardProps = Pick<AppCardProps, 'disabled'>;

export default function AppCard(props: AppCardProps) {
    const { title, image, path, disabled } = props;

    const selectedLanguage = useAppSelector(selectLanguage);

    const navigate = useNavigate();

    return (
        <StyledCard
            role="button"
            onClick={() => navigate(`/${path}`)}
            disabled={disabled}
        >
            <StyledCardMedia image={image} title={title} />
            <CardContent>
                <StyledAppName>
                    {appsTitle[title][selectedLanguage]}
                </StyledAppName>
                <StyledAppDescription>
                    {appsDescription[title][selectedLanguage]}
                </StyledAppDescription>
            </CardContent>
        </StyledCard>
    );
}
