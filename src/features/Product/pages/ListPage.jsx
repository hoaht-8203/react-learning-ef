import { Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
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

const StyledPagination = styled(Pagination)({
    '&.MuiPagination-root': {
        marginBottom: '1rem',
        '.MuiPagination-ul': {
            justifyContent: 'center',
        },
    },
});

function ListPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        total: 1,
        limit: 12,
        page: 1,
    });
    const [filter, setFilter] = useState({
        _limit: 12,
        _page: 1,
    });

    const handlePageChange = (event, page) => {
        if (page !== pagination.page) {
            const newFilter = {
                ...filter,
                _page: page,
            };
            navigate({
                search: queryString.stringify(newFilter),
            });
            setFilter(newFilter);
        }
    };

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            try {
                const params = location.search ? queryString.parse(location.search) : filter;
                const data = await productApi.getAll(params);
                console.log(data, params);
                setProducts(data.data);
                setPagination(data.pagination);
            } catch (error) {
                console.log('error api: ', error);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [filter, location.search]);

    return (
        <div>
            <Grid container spacing={2}>
                <LeftGrid item>
                    <Paper elevation={0}>filter</Paper>
                </LeftGrid>
                <RightGrid item>
                    <StyledPagination
                        shape="rounded"
                        count={Math.ceil(pagination.total / pagination.limit)}
                        page={pagination.page}
                        onChange={handlePageChange}
                    />
                    {loading ? <ProductSkeletonList /> : <ProductList data={products} />}
                </RightGrid>
            </Grid>
        </div>
    );
}

export default ListPage;
