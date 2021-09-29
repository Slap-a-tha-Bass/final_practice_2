import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState<Users['email']>('');
    const [password, setPassword] = useState<Users['password']>('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token),
                    history.push('/profile')
            })
            .catch(() => history.push('/invalid'))
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        <h2 className="text-primary">login</h2>
                        <form className="form-group">
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                            <button onClick={handleLogin} className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Login;
