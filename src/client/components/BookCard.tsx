import React from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';

const BookCard = (props: Books) => {
    return (
        <div className = "card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                <div className="card-title">{props.author}</div>
                <div className="card-text">{props.price}</div>
            </div>
            
        </div>
    )
}

export default BookCard;
