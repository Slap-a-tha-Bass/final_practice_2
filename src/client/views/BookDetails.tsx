import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import { apiService } from '../utils/api-service';

const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [books, setBooks] = useState<Books>(null);

    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => setBooks(data))
    }, [id]);
    
    return (
        <div>
            <BookCard {...books} key={id} />
        </div>
    )
}

export default BookDetails;
