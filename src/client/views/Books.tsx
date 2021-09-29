import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import { apiService } from '../utils/api-service';

const Books = () => {

    const [books, setBooks] = useState<Books[]>([]);

    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            {books.map((book) => (
                <Link key = {book.id} to={`/books/${book.id}`}><BookCard {...book} /></Link>
            ))}
        </div>
    )
}

export default Books;
