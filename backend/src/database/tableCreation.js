import execute from "./dbHelper.js"

const initTables = async () => {
    const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        nickname VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_verified BOOLEAN DEFAULT false,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        language VARCHAR(10) CHECK (language IN ('en', 'fr'))
    );`

    await execute(usersTable).then((result) => {
        if (result) {
            console.log('users Table created')
        }
    })
    const profileTable = `
    CREATE TABLE IF NOT EXISTS profile (
        profile_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        date_of_birth DATE,
        sex VARCHAR(10),
        sexual_orientation VARCHAR(20),
        biography TEXT,
        tags VARCHAR(255)[] DEFAULT ARRAY[]::VARCHAR(255)[],
        pictures VARCHAR(255)[5] DEFAULT ARRAY[]::VARCHAR(255)[5]
    );`
    await execute(profileTable).then((result) => {
        if (result) {
            console.log('profile Table created')
        }
    })
    const relationTable = `CREATE TABLE IF NOT EXISTS relation (
        relation_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        visited_by INT[] DEFAULT ARRAY[]::INT[],
        liked_by INT[] DEFAULT ARRAY[]::INT[],
        fame_rating INT DEFAULT 1,
        gps_position POINT
    );`
    await execute(relationTable).then((result) => {
        if (result) {
            console.log('relation Table created')
        }
    })
}

export default initTables
