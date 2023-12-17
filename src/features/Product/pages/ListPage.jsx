import { Grid, Paper } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProductSkeletonList from '../components/ProductSkeletonList';

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
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productApi.getAll({ _page: 2, _limit: 10 });
                console.log(response);
            } catch (error) {
                console.log('error api: ', error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <LeftGrid item>
                    <Paper elevation={0}>filter</Paper>
                </LeftGrid>
                <RightGrid item>
                    <ProductSkeletonList />
                </RightGrid>
            </Grid>
        </div>
    );
}

export default ListPage;
