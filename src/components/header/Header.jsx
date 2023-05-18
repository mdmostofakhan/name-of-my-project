import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
// import Header from './Header';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to ="/about">about</Link>
            <Link to="/friends">Friends</Link>
            <Link to ="/contact">Contact</Link>
        </nav>
    );
};

export default Header;