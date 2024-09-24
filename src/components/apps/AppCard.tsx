import { useAppSelector } from '../../store/hooks';
import { selectLanguage } from '../../store/globalSlice';

import { appsDescription, appsTitle } from '../../utils/i18n';
import { AppList } from '../../utils/constants';

import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)({
    borderRadius: '20px !important',
});

const StyledCardMedia = styled(CardMedia)({
    backgroundSize: 'initial !important',
});

interface AppCardProps {
    title: AppList;
    image: string;
}

export default function AppCard(props: AppCardProps) {
    const { title, image } = props;

    const selectedLanguage = useAppSelector(selectLanguage);

    return (
        <StyledCard sx={{ width: 250, height: 280 }}>
            <StyledCardMedia sx={{ height: 100 }} image={image} title={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {appsTitle[title][selectedLanguage]}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {appsDescription[title][selectedLanguage]}
                </Typography>
            </CardContent>
        </StyledCard>
    );
}
