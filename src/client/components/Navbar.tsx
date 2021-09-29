import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-center">
            <Link className="btn btn-primary m-3" to="/">Home</Link>
            <Link className="btn btn-primary m-3" to="/books">Books</Link>
            <Link className="btn btn-primary m-3" to="/login">Login</Link>
            <Link className="btn btn-primary m-3" to="/register">Register</Link>
        </div>
    )
}

export default Navbar;
