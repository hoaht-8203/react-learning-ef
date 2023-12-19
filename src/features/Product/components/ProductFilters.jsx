import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
    const handleChangeCategory = (category) => {
        if (!onChange) return;

        onChange(category);
    };

    return (
        <Box>
            <FilterByCategory onChange={handleChangeCategory} />
        </Box>
    );
}

export default ProductFilters;
