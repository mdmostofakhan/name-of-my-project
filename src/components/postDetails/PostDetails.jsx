import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData()
    console.log(postDetail)
    const {id, title, body} = postDetail;
    return (
        <div>
            <h5>post details Id: {id}</h5>
            <p>{title}</p>
        </div>
    );
};

export default PostDetails;