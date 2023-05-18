import React, { useState } from 'react';
import './SinglelFriend.css';
import { Link } from 'react-router-dom';

const SingleFriends = ({friend}) => {
   console.log(friend)
    const {email, name,id, phone} = friend;
    return (
        <div className='friend'>
           <h4>Name:{name}</h4>
           <p>{phone}</p>
           <p>{email}</p>
           <p><Link to={`/friend/${id}`}>show data allow</Link></p>
        </div>
    );
};

export default SingleFriends;