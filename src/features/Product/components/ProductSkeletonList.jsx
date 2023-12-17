import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, Grid, Paper, Skeleton } from '@mui/material';
import styled from 'styled-components';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
    length: 16,
};

const StyledCard = styled(Card)({
    '&.MuiCard-root': {
        boxShadow: 'none',
    },
});

const StyledCardContent = styled(CardContent)({
    '&.MuiCardContent-root': {
        padding: '0.5rem',
        '&:last-child': {
            paddingBottom: '0.5rem',
        },
    },
});

function ProductSkeletonList({ length }) {
    return (
        <Box>
            <Grid container spacing={1}>
                {Array.from(new Array(length)).map((x, idx) => {
                    return (
                        <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                            <Paper elevation={0}>
                                <StyledCard>
                                    <CardMedia>
                                        <Skeleton variant="rectangular" width="100%" height={200} />
                                    </CardMedia>
                                    <StyledCardContent>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                        <Skeleton width="30%" />
                                    </StyledCardContent>
                                </StyledCard>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;
