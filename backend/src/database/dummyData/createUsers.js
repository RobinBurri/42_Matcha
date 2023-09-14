import execute from '../dbHelper.js'

const createUsers = async () => {
    const user_1 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('John', 'Doe', 'john.doe@example.com', 'johndoe', 'hashed_password_1', true);`

    const user_2 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'janesmith', 'hashed_password_2', true);`

    const user_3 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('David', 'Johnson', 'david.johnson@example.com', 'davidj', 'hashed_password_3', true);`

    const user_4 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Emily', 'Wilson', 'emily.wilson@example.com', 'emilyw', 'hashed_password_4', true);`

    const user_5 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Michael', 'Brown', 'michael.brown@example.com', 'michaelb', 'hashed_password_5', true);`

    const user_6 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Sarah', 'Davis', 'sarah.davis@example.com', 'sarahd', 'hashed_password_6', true);`

    const user_7 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Christopher', 'Lee', 'chris.lee@example.com', 'chrisl', 'hashed_password_7', true);`

    const user_8 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Olivia', 'Taylor', 'olivia.taylor@example.com', 'oliviat', 'hashed_password_8', true);`

    const user_9 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('William', 'Miller', 'william.miller@example.com', 'williamm', 'hashed_password_9', true);`

    const user_10 = `INSERT INTO users (first_name, last_name, email, nickname, password, is_verified)
    VALUES ('Ava', 'Anderson', 'ava.anderson@example.com', 'avaa', 'hashed_password_10', true);`

    const usersQueries = [
        user_1,
        user_2,
        user_3,
        user_4,
        user_5,
        user_6,
        user_7,
        user_8,
        user_9,
        user_10
    ];

    for (let i = 0; i < usersQueries.length; i++) {
        await execute(usersQueries[i]).then((result) => {
            if (result) {
                console.log(`user ${i + 1} created`);
            }
        });
    }
}

export default createUsers
