import * as mysql from 'mysql';
import { mySQLResponse } from '../../../types';
import { sqlConfig } from '../config';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = mySQLResponse >(queryString: string, values?: any) => {
    return new Promise <T>((resolve, reject) => {
        pool.query(queryString, values, (error, results) => {
            if(error) {
                reject(error)
            } else {
                resolve(results);
            }
        })
    })
}