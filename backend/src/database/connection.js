import pgp from 'pg-promise'
const pg = pgp()

const connectDB = async () => {
    const dbConfig = {
        user: process.env.POSTGRES_USER,
        host: 'postgresql',
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
    }

    const maxAttempts = 10
    const retryInterval = 2000
    const db = pg(dbConfig)

    let attempts = 0

    while (attempts < maxAttempts) {
        try {
            await db.any('SELECT 1')
            console.log('Connected to the database!')
            return
        } catch (err) {
            console.error(
                'Error connecting to the database (attempt ' +
                    (attempts + 1) +
                    '):',
                err
            )
            attempts++
            await new Promise((resolve) => setTimeout(resolve, retryInterval))
        }
    }
    console.error(
        'Failed to connect to the database after ' + maxAttempts + ' attempts.'
    )
}

export default connectDB
