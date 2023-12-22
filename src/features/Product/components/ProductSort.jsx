import { Box, Tab, Tabs } from '@mui/material';
import { ORIGINAL_PRICE_ASC, ORIGINAL_PRICE_DESC, PROMOTION_PERCENT_DESC } from 'constants';
import PropTypes from 'prop-types';

ProductSort.propTypes = {
    sortValue: PropTypes.string.isRequired,
    handleChangeTab: PropTypes.func,
};

function ProductSort({ sortValue, handleChangeTab }) {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                marginBottom: '0.5rem',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
            }}>
            <Tabs value={sortValue} onChange={handleChangeTab} aria-label="disabled tabs example">
                <Tab label="Giá thấp tới cao" value={ORIGINAL_PRICE_ASC} />
                <Tab label="Giá cao tới thấp" value={ORIGINAL_PRICE_DESC} />
                <Tab label="Giảm giá" value={PROMOTION_PERCENT_DESC} />
            </Tabs>
        </Box>
    );
}

export default ProductSort;
