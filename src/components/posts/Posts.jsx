import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Posts = ({post}) => {
    console.log(post)
    const {title, id, body} = post;
   const navigate = useNavigate();

   const handleder = () =>{
    navigate(`/post/:${id}`)
   }

    return (
        <div className='post'>
            <h5>id: {id}</h5>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
           <Link to={`/post/${id}`}><button>btn click</button></Link>
            <button onClick={handleder}>With btn click</button>
        </div>
    );
};

export default Posts;