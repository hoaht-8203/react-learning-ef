import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';
import './styles.css'

PostList.propTypes = {
    
};

function PostList(props) {
    return (
        <div className='post-list'>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    );
}

export default PostList;