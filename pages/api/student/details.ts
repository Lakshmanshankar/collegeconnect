import { NextApiRequest, NextApiResponse } from "next";
import { createPool } from "mysql2";
import { ConnectionObject } from "../connection";
const pool = createPool(ConnectionObject);

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const { email } = req.query;
    // res.status(200).json({ message: "Hello" });
    // "SELECT * FROM StudentInfo WHERE id = ?",
    if (method === "GET") {
        pool.query(
            "SELECT * FROM StudentInfo WHERE id = ?",
            [email],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ message: err.message });
                }
                console.log(results);
                res.status(201).json(results);
            }
        );
    }
};