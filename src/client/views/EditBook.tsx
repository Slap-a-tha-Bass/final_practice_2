import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { Books, Categories } from '../../../types';
import { apiService } from '../utils/api-service';

const EditBook = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [title, setTitle] = useState<Books['title']>('');
    const [author, setAuthor] = useState<Books['author']>('');
    const [price, setPrice] = useState<Books['price']>();
    const [categoryid, setCategoryid] = useState<Books['id']>();
    const [categories, setCategories] = useState<Categories[]>([]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}/edit`, 'PUT', { title, author, price, categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => {
                setTitle(data.title),
                setAuthor(data.author),
                setPrice(data.price),
                setCategoryid(data.categoryid)
            })
    }, [id])
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])
    const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryid(Number(e.target.value))
    }
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <form action="" className="form-group">
                        <label htmlFor="">Title</label>
                        <input value={title || ''} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                        <label htmlFor="">Author</label>
                        <input value={author || ''} onChange={e => setAuthor(e.target.value)} type="text" className="form-control" />
                        <label htmlFor="">Price</label>
                        <input value={price || ''} onChange={e => setPrice(Number(e.target.value))} step='.01' type="number" className="form-control" />
                        <select value={categoryid} onChange={selectCategory}>
                            <option value="0">Choose Genre</option>
                            {categories.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <div>
                            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default EditBook;
