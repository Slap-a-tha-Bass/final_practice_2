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
        const [book] = await db_books.get_one_book(id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all books', error: error.message})
    }
});


export default router;