import mysql from 'mysql2/promise';

export default async function handler (res, req) {

    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        database: 'products',
        // port:
        user: 'root',
        password: 'password'
    });

    res.status(200).json({name: 'John Doe'});
}