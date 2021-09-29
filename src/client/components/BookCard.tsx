import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Books, Categories } from '../../../types';
import { apiService } from '../utils/api-service';

const BookCard = (props: Books) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    const [title, setTitle] = useState<Books['title']>(null);
    const [author, setAuthor] = useState<Books['author']>(null);
    const [price, setPrice] = useState<Books['price']>(null);
    const [categoryid, setCategoryid] = useState<Categories['id']>(null);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(confirm('Are you sure you want to delete?')) {
            apiService(`/api/books/${id}/delete`, 'DELETE', { title, author, price, categoryid })
                .then(data => {
                    history.push('/books')
                })
        }
    }
    return (
        <div className = "card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                <div className="card-title">{props.author}</div>
                <div className="card-text">{props.price}</div>
            </div>
            {props.isPreview && <Link to={`/edit/${props.id}`}>Edit</Link>}
            {props.isPreview && <button onClick={handleDelete} >Delete</button>}
        </div>
    )
}

export default BookCard;
