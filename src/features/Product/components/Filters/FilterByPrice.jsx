import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const StyledTypography = styled(Typography)({
    '&.MuiTypography-root': {
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '150%',
        paddingLeft: '1rem',
    },
});

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        originalPrice_gte: 0,
        originalPrice_lte: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleClick = () => {
        if (onChange) {
            onChange(values);
        }
    };

    return (
        <Box>
            <StyledTypography>GIÁ</StyledTypography>

            <Box sx={{ display: 'flex', alignItems: 'center', paddingX: '1rem' }}>
                <TextField
                    size="small"
                    name="originalPrice_gte"
                    value={values.originalPrice_gte}
                    onChange={handleChange}
                />
                <span>-</span>
                <TextField
                    size="small"
                    name="originalPrice_lte"
                    value={values.originalPrice_lte}
                    onChange={handleChange}
                />
            </Box>

            <Box sx={{ paddingX: '1rem', paddingY: '0.5rem' }}>
                <Button onClick={handleClick} variant="contained">
                    Áp dụng
                </Button>
            </Box>
        </Box>
    );
}

export default FilterByPrice;
