import React from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import './styles.css'

PostFeature.propTypes = {
    
};

function PostFeature(props) {
    return (
        <div>
            <PostList/>
        </div>
    );
}

export default PostFeature;