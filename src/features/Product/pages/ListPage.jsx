import { Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import { ORIGINAL_PRICE_ASC } from 'constants';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

const LeftGrid = styled(Grid)({
    width: '230px',
    maxHeight: '100vh',
    position: 'sticky',
    top: '16px',
    '&.MuiGrid-root': {
        '&.MuiGrid-item': {
            paddingTop: '0',
        },
    },
});

const RightGrid = styled(Grid)({
    width: 'calc(100% - 254px)',
    boxSizing: 'border-box',
    '&.MuiGrid-root': {
        '&.MuiGrid-item': {
            paddingTop: '0',
        },
    },
});

const StyledPagination = styled(Pagination)({
    '&.MuiPagination-root': {
        margin: '1.5rem 0',
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
        _sort: ORIGINAL_PRICE_ASC,
    });

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

    const handleChangeTab = (event, newValue) => {
        const newFilter = {
            ...filter,
            _page: 1,
            _sort: newValue,
        };
        navigate({
            search: queryString.stringify(newFilter),
        });
        setFilter(newFilter);
    };

    const handleChangeFilter = (newFilter) => {
        navigate({
            search: queryString.stringify({
                ...filter,
                ...newFilter,
            }),
        });
        setFilter({
            ...filter,
            ...newFilter,
        });
    };

    return (
        <div>
            <Grid container spacing={2}>
                <LeftGrid item>
                    <Paper sx={{ borderRadius: '0.5rem' }} elevation={0}>
                        <ProductFilters onChange={handleChangeFilter} />
                    </Paper>
                </LeftGrid>
                <RightGrid item>
                    <ProductSort sortValue={filter._sort} handleChangeTab={handleChangeTab} />

                    {loading ? <ProductSkeletonList /> : <ProductList data={products} />}

                    <StyledPagination
                        shape="rounded"
                        count={Math.ceil(pagination.total / pagination.limit)}
                        page={pagination.page}
                        onChange={handlePageChange}
                    />
                </RightGrid>
            </Grid>
        </div>
    );
}

export default ListPage;
