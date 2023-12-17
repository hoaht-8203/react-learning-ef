import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

ProductList.propTypes = {
    data: PropTypes.array,
};

function ProductList({ data }) {
    return (
        <Box>
            <Grid container spacing={1}>
                {data.map((product) => {
                    return (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProductList;
