import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.defaultProps = {
    albumList: [],
};

function AlbumList(props) {
    const { albumList } = props;

    return (
        <div className="list-album">
            {albumList.map((album) => {
                return <AlbumItem key={album.id} albumItem={album} />;
            })}
        </div>
    );
}

export default AlbumList;
