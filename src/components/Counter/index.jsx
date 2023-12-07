import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [ count, setCount ] = useState(0)


    return (
        <div>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;