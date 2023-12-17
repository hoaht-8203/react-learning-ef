import { Grid, Paper } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {};

const LeftGrid = styled(Grid)({
    width: '230px',
    maxHeight: '100vh',
});

const RightGrid = styled(Grid)({
    width: 'calc(100% - 254px)',
    boxSizing: 'border-box',
});

function ListPage(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productApi.getAll({ _page: 2, _limit: 16 });
                setProducts(data.data);
            } catch (error) {
                console.log('error api: ', error);
            }
            setLoading(false);
        };

        fetchProduct();
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <LeftGrid item>
                    <Paper elevation={0}>filter</Paper>
                </LeftGrid>
                <RightGrid item>{loading ? <ProductSkeletonList /> : <ProductList data={products} />}</RightGrid>
            </Grid>
        </div>
    );
}

export default ListPage;
