import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState<Users['email']>('');
    const [password, setPassword] = useState<Users['password']>('');
    const [first_name, setFirstName] = useState<Users['name']>('');

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { email, password, name: first_name, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token.token),
                    history.push('/')
            })
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        <h2 className="text-primary">register</h2>
                        <form className="form-group">
                            <label htmlFor="">Name</label>
                            <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                            <button onClick={handleRegister} className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Register;
