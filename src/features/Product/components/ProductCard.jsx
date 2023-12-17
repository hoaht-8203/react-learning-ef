import { Box, Card, CardContent, CardMedia, Chip, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';

ProductCard.propTypes = {
    product: PropTypes.object,
};

const StyledCard = styled(Card)({
    '&.MuiCard-root': {
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
        },
    },
});

const StyledCardContent = styled(CardContent)({
    '&.MuiCardContent-root': {
        padding: '0.5rem',
        height: '100px',
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        '&:last-child': {
            paddingBottom: '0.5rem',
        },
    },
});

const ProductTitle = styled(Typography)({
    '&.MuiTypography-h3': {
        whiteSpace: 'break-spaces',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '150%',
        color: 'rgb(39, 39, 42)',
        height: '50px',
    },
});

function ProductCard({ product }) {
    const thumbnail = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail.url}`
        : 'https://placehold.co/400x400?font=roboto&text=null%20image';

    return (
        <Paper elevation={0}>
            <StyledCard>
                <CardMedia component="img" image={thumbnail} alt="Paella dish" />
                <StyledCardContent>
                    <ProductTitle variant="h3">{product.name}</ProductTitle>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', fontWeight: '500' }}>
                        <Typography>
                            {new Intl.NumberFormat('vi-VN').format(product.originalPrice)} <sup>đ</sup>
                        </Typography>
                        {product.promotionPercent !== 0 ? (
                            <Chip
                                sx={{ marginLeft: '5px', fontSize: '12px' }}
                                label={`-${product.promotionPercent}%`}
                                size="small"
                            />
                        ) : (
                            ''
                        )}
                    </Box>
                </StyledCardContent>
            </StyledCard>
        </Paper>
    );
}

export default ProductCard;
