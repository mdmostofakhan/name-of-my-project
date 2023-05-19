import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friends = useLoaderData();
    // console.log(friends)
    const nevigate = useNavigate()
    const handleGoBack = () => {
        nevigate(-1)
    }
    return (
        <div>
            <h5>Everything about thie personis here</h5>
            <h4>Name: {friends.name}</h4>
            <p>phone:{friends.phone}</p>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default FriendDetail;