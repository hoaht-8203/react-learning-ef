import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styled from 'styled-components';
import { Button } from '@mui/material';

CounterFeature.propTypes = {};

const ButtonCustom = styled(Button)({
    '&.MuiButton-root': {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    },
});

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count);

    const handleIncreaseClick = () => {
        dispatch(increase());
    };

    const handleDecreaseClick = () => {
        dispatch(decrease());
    };

    return (
        <div>
            <h1>{counter}</h1>

            <div>
                <ButtonCustom sx={{ marginRight: '0.5rem' }} onClick={handleIncreaseClick}>
                    Increase
                </ButtonCustom>
                <ButtonCustom onClick={handleDecreaseClick}>Decrease</ButtonCustom>
            </div>
        </div>
    );
}

export default CounterFeature;
