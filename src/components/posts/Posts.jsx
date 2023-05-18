import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Posts = ({post}) => {
    console.log(post)
    const {title, id, body} = post;
    return (
        <div className='post'>
            <h5>id: {id}</h5>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>btn click</button>
        </div>
    );
};

export default Posts;