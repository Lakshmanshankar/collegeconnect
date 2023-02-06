import { NextApiRequest, NextApiResponse } from "next";
import { createPool } from "mysql2";
import ConnectionObject from "../../connection";

const pool = createPool(ConnectionObject);


export default async (req: NextApiRequest, res: NextApiResponse) => {
    let { email } = req.query;
    let { method } = req;
    let date = (new Date().getTime()).toString();
    if (method === "GET") {
        pool.query("SELECT * FROM StudentLibrary WHERE id = ?", [email], (err, result) => {
            if (err) {
                res.status(500).json({
                    error: err
                });
            } else {
                console.log(result);
                res.status(200).json({
                    result
                });
            }
        });
    } else if (method === "POST") {
        let { email, name } = req.body;
        pool.query("INSERT INTO StudentLibrary VALUES (?, ?,?)", [email, name, date], (err, result) => {
            if (err) {
                res.status(500).json({
                    error: err
                });
            } else {
                res.status(200).json({
                    result
                });
            }
        });
    }

}