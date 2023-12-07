import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

PostItem.propTypes = {
    post: PropTypes.object
};

PostItem.defaultProps = {
    post: null
}

function PostItem(props) {
    let { post } = props

    return (
        <div className='post-item'>
            <div className='post-header'>
                <h3>{post.name}</h3>
            </div>
            <div className='post-review'>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default PostItem;