import React from 'react';
import { Link } from 'react-router-dom';

const Invalid = () => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-primary">INVALID</h2>
                    <Link className="btn btn-primary" to="/login">login</Link>
                    <Link className="btn btn-primary" to="/register">register</Link>
                </div>
            </section>
        </main>
    )
}

export default Invalid;
