import mysql2 from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';
import { ConnectionObject } from "./connection"
const pool = mysql2.createPool(ConnectionObject);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let { id, name, email, sub, picture } = req.body;
    // if user exists in db, return user else create user in db and return user
    const q = `SELECT * FROM StudentDetails WHERE email="${email}";`
    pool.query(q, (err: any, result: Array<number>) => {
        if (err) {
            console.log(err);
        } else if (result.length > 0) {
            res.status(200).json({ message: "user Already exists", result });
        } else {
            const q = `INSERT INTO StudentDetails values("${id}","${name}","${email}","${picture}","student","${sub}",39);`
            pool.query(q, (err, result) => {
                if (err) {
                    console.log(err);
                }
                res.status(200).json({ message: "User Created Successfully", result: result });
            });
        }
    });
}
