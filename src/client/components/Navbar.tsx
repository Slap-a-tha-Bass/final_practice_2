import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Navbar;
