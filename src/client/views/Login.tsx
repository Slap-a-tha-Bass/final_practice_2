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
                history.push('/profile'),
                console.log(token);
            })
    }

    return (
        <div>
            <form className="form-group">
                <label htmlFor="">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                <label htmlFor="">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;
