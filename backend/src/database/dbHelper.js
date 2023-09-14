import pkg from 'pg'
const { Client } = pkg

const execute = async (query) => {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: 'postgresql',
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
    })
    try {
        await client.connect()
        await client.query(query)
        return true
    } catch (error) {
        console.error(error.stack)
        return false
    } finally {
        await client.end()
    }
}

export default execute