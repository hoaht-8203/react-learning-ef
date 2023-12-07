import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import StarIcon from '../StarIcon';

PostItem.propTypes = {
    
};

function PostItem(props) {
    return (
        <div className='post-item'>
            <div className='post-header'>
                <h3>Carolyne Agustine</h3>
                <p>12.12.2023</p>
            </div>
            <div className='post-review'>
                <p>The employee girl was super nice :) she explained how to best eat my meal when I got my food. There was construction going on right by the wall I was sitting on 1st floor. The employee apologized and asked me if O want to move. So kind and attentive. Even after the meal she made sure I was okay to go because it was raining. 110% recommend!!</p>
            </div>
            <div className='post-star'>
                <StarIcon size={25}/>
                <StarIcon size={25}/>
                <StarIcon size={25}/>
                <StarIcon size={25}/>
                <StarIcon size={25}/>
            </div>
            <div className='post-img'>
                <img src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/408065969_122121555800045256_130272769312331557_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c42490&_nc_ohc=k0UkJDucSvsAX9Xk8NP&_nc_ht=scontent.fhph2-1.fna&oh=00_AfAKMG8uVQfn2Ezni1eRPKhSavQjT8FdOI8GuviUq0ecDw&oe=65776110" alt="" />
            </div>
            <div className='post-footer'>
                <h3>12🩷</h3>
            </div>
        </div>
    );
}

export default PostItem;