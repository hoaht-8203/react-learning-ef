import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

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
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Increase</button>
            </div>
        </div>
    );
}

export default CounterFeature;
