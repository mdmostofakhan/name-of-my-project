import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriends from '../singleFriends/SingleFriends';
import './Friends.css';


const Friends = () => {
  const friends = useLoaderData()
  console.log(friends)
    return (
        <div>
            <h4>im a good friends:{friends.length}</h4>
            <div className='friend-container'>
                {
                  friends.map(friend => <SingleFriends
                  key={friend.id}
                  friend={friend}
                  ></SingleFriends>)
                }
            </div>
        </div>
    );
};

export default Friends;