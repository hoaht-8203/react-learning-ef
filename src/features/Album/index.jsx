import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

const albumList = [
    {
        id: 1,
        name: 'Binz - Hit Me Up',
        thumbnailUrl: 'https://i1.sndcdn.com/artworks-uftLwixwRE4tD2Ds-u13E8A-t500x500.jpg'
    },
    {
        id: 2,
        name: 'Karik x GDucky - Bạn Đời',
        thumbnailUrl: 'https://i1.sndcdn.com/artworks-ApvQyeZTjBJd1slQ-ly33xQ-t500x500.jpg'
    },
    {
        id: 3,
        name: 'Rồi Em Sẽ Gặp Một Chàng Trai Khác',
        thumbnailUrl: 'https://i1.sndcdn.com/artworks-Zv3YYDwWmpDegmo1-BvBZgg-t500x500.jpg'
    }
]

function AlbumFeature(props) {
    return (
        <div style={{paddingLeft: '1rem'}}>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;