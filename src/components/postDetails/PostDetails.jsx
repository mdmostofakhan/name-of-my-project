import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData()
    console.log(postDetail)
    const {id, title, body} = postDetail;
    
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate (-1)
    }
    return (
        <div>
            <h5>post details Id: {id}</h5>
            <p>Title: {title}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;