import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, List, ListItem, Typography } from '@mui/material';
import styled from 'styled-components';

FilterByService.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.object,
};

const StyledTypography = styled(Typography)({
    '&.MuiTypography-root': {
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '150%',
        paddingLeft: '1rem',
    },
});

function FilterByService({ onChange, filter = {} }) {
    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        onChange({
            [name]: checked,
        });
    };

    return (
        <Box>
            <StyledTypography>DỊCH VỤ</StyledTypography>

            <List>
                {[
                    { key: 'isPromotion', label: 'Giảm giá' },
                    { key: 'isFreeShip', label: 'Free ship' },
                ].map((service) => (
                    <ListItem sx={{ paddingY: '0' }} key={service.key}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filter[service.key])}
                                    name={service.key}
                                    onChange={handleChange}
                                />
                            }
                            label={service.label}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default FilterByService;
