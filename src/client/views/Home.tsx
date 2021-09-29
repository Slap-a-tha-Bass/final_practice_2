import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Books, Categories } from '../../../types';
import { apiService } from '../utils/api-service';

const Home = () => {
    const history = useHistory();
    const [title, setTitle] = useState<Books['title']>(null);
    const [author, setAuthor] = useState<Books['author']>(null);
    const [price, setPrice] = useState<Books['price']>(null);
    const [categoryid, setCategoryid] = useState<Categories['id']>(null);
    const [categories, setCategories] = useState<Books[]>([]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title, author, price, categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <form action="" className="form-group">
                        <label htmlFor=""></label>
                        <input value={title || ''} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                        <label htmlFor=""></label>
                        <input value={author || ''} onChange={e => setAuthor(e.target.value)} type="text" className="form-control" />
                        <label htmlFor=""></label>
                        <input value={price} onChange={e => setPrice(Number(e.target.value))} step='.01' type="text" className="form-control" />
                        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Home;
