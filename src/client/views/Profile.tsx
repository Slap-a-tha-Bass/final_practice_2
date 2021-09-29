import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState<Users['id']>();

    useEffect(() => {
        apiService('/api/users')
            .then(data => setUser(data))
    }, [])
    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        <h2 className="text-primary">profile</h2>
                        <h1 className="text-primary">{user}</h1>
                        <Link to='/' className="btn btn-primary">Home</Link>
                        <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Profile;
