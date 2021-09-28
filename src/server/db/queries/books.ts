import { Books } from '../../../../types';
import { Query } from '../index';

const get_books = () => Query<Books[]>('SELECT * FROM Books');
const get_one_book = (id: number) => Query<Books[]>('SELECT * FROM Books WHERE id=?',[id]);
const post_book = (newBook: {title: string, author: string, categoryid: number, price: number}, id: number) => Query('INSERT INTO Books SET ?', [newBook, id]);
const edit_book = (editBook: {title: string, author: string, categoryid: number, price: number}, id: number) => Query('UPDATE Books SET ? WHERE id=?',[editBook, id]);
const delete_book = (id: number) => Query('DELETE FROM Books WHERE id=?', [id]);

export default {
    get_books,
    get_one_book,
    post_book,
    edit_book,
    delete_book
}