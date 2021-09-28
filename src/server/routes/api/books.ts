import * as express from 'express';
import db_books from '../../db/queries/books';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await db_books.get_books();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching ALL books', error: error.message})
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [book] = await db_books.get_one_book(Number(id));
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all books', error: error.message})
    }
});
router.post('/', async (req, res) => {
    let id = 0;
    const { title, author, categoryid, price } = req.body;
    const newBook = { title, author, categoryid, price };
    try {
        await db_books.post_book(newBook, id++);
        res.status(201).json({ message: "Book posted", id});
    } catch (error) {
        res.status(500).json({ message: 'Problem POSTing book', error: error.message})
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { title, author, categoryid, price } = req.body;
    const editBook = { title, author, categoryid, price };
    try {
        const edit_book = await db_books.edit_book(editBook, Number(id));
        res.status(201).json({ message: "Book edited"});
    } catch (error) {
        res.status(500).json({ message: 'Problem editing book', error: error.message})
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db_books.delete_book(Number(id));
        res.json({ message: 'Book deleted!'});
    } catch (error) {
        res.status(500).json({ message: 'Problem deleting book', error: error.message})
    }
});

export default router;