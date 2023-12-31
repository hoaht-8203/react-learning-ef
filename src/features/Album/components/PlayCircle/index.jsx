import React from 'react';
import PropTypes from 'prop-types';

PlayCircle.propTypes = {
    size: PropTypes.number
};

PlayCircle.defaultProps = {
    size: 20
}

function PlayCircle(props) {
    const { size } = props

    return (
        <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/>
        </svg>
    );
}

export default PlayCircle;