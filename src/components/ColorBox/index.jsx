import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

const colors = ['deeppink', 'green', 'yellow', 'black', 'blue'];

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('main_color') || 'deeppink';
    });

    const handleChangeColor = () => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        setColor(color);
        localStorage.setItem('main_color', color);
    };

    return (
        <div>
            <div
                onClick={handleChangeColor}
                style={{ backgroundColor: color, width: '200px', height: '200px', border: '1px solid black' }}></div>
        </div>
    );
}

export default ColorBox;
