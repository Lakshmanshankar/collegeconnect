import { NextApiRequest, NextApiResponse } from 'next';
import ConnectionObject from '../../connection';
import { createPool } from "mysql2";

const pool = createPool(ConnectionObject);
export default async function handler (req: NextApiRequest, res: NextApiResponse)  {
    const { method } = req;
    if (method === "POST") {
        const { email, address, phone, classname, department, regno } = req.body;
        const obje = {
            email,
            address,
            phone,
            classname,
            department,
            regno,
        }
        const q = `INSERT INTO StudentInfo (id, address, phone, class, department, regno) VALUES ('${email}', '${address}', '${phone}', '${classname}', '${department}', '${regno}')`
        pool.query(q, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })
    }
}
