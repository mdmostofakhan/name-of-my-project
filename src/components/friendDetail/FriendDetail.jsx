import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div>
            <h5>Everything about thie personis here</h5>
            <h4>Name: {friends.name}</h4>
            <p>phone:{friends.phone}</p>
        </div>
    );
};

export default FriendDetail;