import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [ color, setColor ] = useState('green')
    

    return (
        <div>
            <div 
                style={{backgroundColor: color, width: '200px', height: '200px'}}
            >
            </div>
            
            <button onClick={() => setColor('red')}>Change to red</button>
            <button onClick={() => setColor('green')}>Change to green</button>
        </div>
    );
}

export default ColorBox;