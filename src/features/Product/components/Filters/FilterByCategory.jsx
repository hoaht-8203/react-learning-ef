import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';

FilterByCategory.propTypes = {
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

function FilterByCategory({ onChange }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const data = await categoryApi.getAll();
                setCategories(
                    data.map((category) => {
                        return {
                            id: category.id,
                            name: category.name,
                        };
                    }),
                );
            } catch (error) {
                console.log('error api: ', error);
            }
        };

        fetchCategory();
    }, []);

    const handleClickCategory = (category) => {
        if (!onChange) {
            return;
        }

        onChange(category);
    };

    return (
        <Box
            sx={{
                paddingTop: '12px',
            }}>
            <StyledTypography>DANH MỤC SẢN PHẨM</StyledTypography>
            <List>
                {categories.map((category, index) => {
                    return (
                        <ListItem onClick={() => handleClickCategory(category)} key={category.id} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={category.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}

export default FilterByCategory;
