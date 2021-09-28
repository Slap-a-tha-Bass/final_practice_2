import { Categories } from '../../../../types';
import { Query } from '../index';

const get_categories = () => Query<Categories[]>('SELECT * FROM Categories');
const get_one_category = (id: number) => Query<Categories[]>('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    get_categories,
    get_one_category
}