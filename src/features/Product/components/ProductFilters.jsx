import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
    const handleChangeCategory = (category) => {
        if (!onChange) return;

        const newFilter = {
            _page: 1,
            'category.id': category.id,
        };

        onChange(newFilter);
    };

    const handleChangePrice = (values) => {
        if (!onChange) return;

        onChange({
            _page: 1,
            ...values,
        });
    };

    return (
        <Box>
            <FilterByCategory onChange={handleChangeCategory} />
            <FilterByPrice onChange={handleChangePrice} />
        </Box>
    );
}

export default ProductFilters;
