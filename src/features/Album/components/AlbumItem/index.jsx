import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
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
        <div className="album album--active">
            <div className="album__thumbnail">
                <img src={albumItem.thumbnailUrl} alt="thumbnail album" />
            </div>
            <div className="album__name">
                <h3>{albumItem.name}</h3>
            </div>
            <div className="album__action">
                <PlayCircle size={30} />
            </div>
        </div>
    );
}

export default AlbumItem;
