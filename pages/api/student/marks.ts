import { NextApiRequest, NextApiResponse } from 'next';
import { ConnectionObject } from "../connection";
import { createPool } from "mysql2";

const pool = createPool(ConnectionObject);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    if (method === "POST") {
        const { email, testname, graphics, iot, webtech, project, st } = req.body;
        const obje = {
            email,
            testname,
            graphics,
            iot,
            webtech,
            project,
        }
        const q = `INSERT INTO StudentMarks (Graphics, IOT, WebTEch,STLab, Project,testname,email) VALUES ('${graphics}', '${iot}', '${webtech}', '${project}', '${st}','${testname}','${email}')`
        pool.query(q, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.status(200).json("successfully inserted marks")
        })
    } else if (method === "GET") {
        const { email } = req.query;
        pool.query(`SELECT * FROM StudentMarks where email = ?`, [email], (err, result) => {
            if (err) {
                console.log(err)
            }
            res.status(200).json(result)
        })
    }
}