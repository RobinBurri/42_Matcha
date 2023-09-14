import pgp from 'pg-promise';
const pg = pgp();

const connectDB = async () => {
    const db = pg({
        user: process.env.POSTGRES_USER,
        host: 'postgresql',
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
    });

    try {
        // Implement a health check by attempting to query a known table or value
        await db.any('SELECT 1');
        console.log('Connected to the database!');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

export default connectDB;
