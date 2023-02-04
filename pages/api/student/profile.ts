import { NextApiRequest, NextApiResponse } from "next";
import { createPool } from "mysql2";
import ConnectionObject from "../connection";

const pool = createPool(ConnectionObject);


export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const { email } = req.body;
    if (method === "GET") {
        const q = `SELECT * FROM StudentDetaills WHERE email='${email}'`;
        pool.query(q, (err: any, result: Array<number>) => {
            if (err) {
                res.status(500).json({ message: "Internal Server Error" });
            } else if (result.length > 0) {
                res.status(200).json({ message: "Sucess", result });
            }
        });
    } else if (method === "POST") {
        
    }
    res.status(200).json({ name: "John Doe" });
};