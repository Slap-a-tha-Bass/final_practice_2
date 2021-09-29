import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState<Users['email']>('');
    const [password, setPassword] = useState<Users['password']>('');
    const [first_name, setFirstName] = useState<Users['name']>('');

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { name: first_name, email, password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token.token),
                history.push('/profile'),
                console.log(token.token);
            })
    }

    return (
        <div>
            <form className="form-group">
            <label htmlFor="">Name</label>
                <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
                <label htmlFor="">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                <label htmlFor="">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Register;
