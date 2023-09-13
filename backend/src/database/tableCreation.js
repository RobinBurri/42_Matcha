import client from './connection.js'

const execute = async (query) => {
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

const initTables = () => {
    const userTable = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`

    execute(userTable).then((result) => {
        if (result) {
            console.log('Table created')
        }
    })
}

export default initTables
