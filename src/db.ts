import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connnection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_ts',
        connectionLimit:10
    })
    return connnection
}
/* import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
} */