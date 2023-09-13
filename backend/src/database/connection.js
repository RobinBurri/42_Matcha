import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'postgresql',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

export default client
