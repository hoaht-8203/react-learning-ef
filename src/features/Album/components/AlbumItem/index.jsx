import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import PlayCircle from '../PlayCircle';

AlbumItem.propTypes = {
    albumItem: PropTypes.object,
};

AlbumItem.defaultProps = {
    albumItem: {},
};

function AlbumItem(props) {
    const { albumItem } = props;

    return (
        <div className="album">
            <img src={albumItem.thumbnailUrl} alt="thumbnail album" />
            <div className="album-content">
                <h3>{albumItem.name}</h3>
            </div>
            <a
                href="https://soundcloud.com/liutiudiu/binz-hit-me-up-feat-nomovodka"
                target="_blank"
                className="playcircle"
                rel="noreferrer">
                <PlayCircle size={30} />
            </a>
        </div>
    );
}

export default AlbumItem;
