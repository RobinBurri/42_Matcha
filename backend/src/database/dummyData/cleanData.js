import execute from '../dbHelper.js'

const dropAllTables = async () => {
    const dropTables = `
    DROP TABLE IF EXISTS relation;
    DROP TABLE IF EXISTS profile;
    DROP TABLE IF EXISTS users;
    `
    await execute(dropTables).then((result) => {
        if (result) {
            console.log('All tables dropped')
        }
    })
}

export default dropAllTables