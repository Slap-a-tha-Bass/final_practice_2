import * as express from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import { ReqUsers } from '../../../../types';
import { jwtConfig } from '../../config';
import db_users from '../../db/queries/users';
import { generateHash } from '../../utils/passwords';

const router = express.Router();

router.post('/',passport.authenticate('local'), async (req: ReqUsers, res) => {
    const { email, password, name } = req.body;
    try {
        if(!email || !password){
            res.json('Fill out all fields');
            return;
        }
        const hashed = generateHash(password);
        const newUser = { email, password: hashed, name, role: 'guest' };
        const register = await db_users.insert(newUser);
        const token = jwt.sign({ userid: register.insertId, email, role: 'guest'},
        jwtConfig.secret,
        {expiresIn: jwtConfig.expires})
        res.json({ register, token});
    } catch (error) {
        res.status(500).json({ message: 'Registration Error' });
    }
});

export default router;