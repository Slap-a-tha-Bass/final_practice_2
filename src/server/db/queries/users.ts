import { Users } from '../../../../types';
import { Query } from '../index';

const get_users = () => Query('SELECT * FROM Users');

const find = (column: string, value: string) => Query<Users[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = (newUser: {email: string, password: string, role: string, name: string}) => Query('INSERT INTO Users Set ?', [newUser]);

export default {
    find,
    insert
}