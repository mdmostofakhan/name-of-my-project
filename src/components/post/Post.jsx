import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../posts/Posts';

const Post = () => {
    const posts = useLoaderData()
    // console.log(posts)
    return (
        <div>
            <h4>hello my post box:{posts.length}</h4>
            {
                posts.map(post => <Posts
                key={post.id}
                post = {post}
                ></Posts> )
            }
        </div>
    );
};

export default Post;