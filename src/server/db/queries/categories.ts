import { Query } from '../index';

const get_categories = () => Query('SELECT * FROM Categories');
const get_one_category = (id: string) => Query('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    get_categories,
    get_one_category
}