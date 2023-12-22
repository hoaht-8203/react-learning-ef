import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.object,
};

function ProductFilters({ onChange, filter }) {
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

    const handleChangeService = (values) => {
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
            <FilterByService onChange={handleChangeService} filter={filter} />
        </Box>
    );
}

export default ProductFilters;
