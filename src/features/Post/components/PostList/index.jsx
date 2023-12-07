import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';
import './styles.css'

PostList.propTypes = {
    postList: PropTypes.array,
};

PostList.defaultProps = {
    postList: [],
}

function PostList(props) {
    const { postList } = props

    return (
        <div className='post-list'>
            {postList.map((post) => {
                return <PostItem key={post.id} post={post}/>
            })}
        </div>
    );
}

export default PostList;