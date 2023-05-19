import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../activeLink/ActiveLink';
// import Header from './Header';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to ="/about">about</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/post">Posts</ActiveLink>
            <ActiveLink to ="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;