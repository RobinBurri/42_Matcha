import execute from '../dbHelper.js'

const createProfiles = async () => {
    const user_1 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (1, '1990-01-15', 'Male', 'Heterosexual', 'I love hiking and reading.', ARRAY['#hiking', '#reading'], ARRAY['pic1.jpg', 'pic2.jpg']);`

    const user_2 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (2, '1985-05-22', 'Female', 'Heterosexual', 'Travel enthusiast and foodie.', ARRAY['#travel', '#foodie'], ARRAY['pic3.jpg', 'pic4.jpg']);`

    const user_3 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (3, '1992-11-10', 'Male', 'Bisexual', 'Tech geek and gamer.', ARRAY['#tech', '#gaming'], ARRAY['pic5.jpg', 'pic6.jpg']);`

    const user_4 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (4, '1988-07-03', 'Female', 'Lesbian', 'Art lover and musician.', ARRAY['#art', '#music'], ARRAY['pic7.jpg', 'pic8.jpg']);`

    const user_5 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (5, '1995-09-28', 'Male', 'Heterosexual', 'Fitness enthusiast and traveler.', ARRAY['#fitness', '#travel'], ARRAY['pic9.jpg', 'pic10.jpg']);`

    const user_6 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (6, '1987-03-14', 'Female', 'Heterosexual', 'Nature lover and photographer.', ARRAY['#nature', '#photography'], ARRAY['pic11.jpg', 'pic12.jpg']);`

    const user_7 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (7, '1991-12-25', 'Male', 'Heterosexual', 'Movie buff and food enthusiast.', ARRAY['#movies', '#foodie'], ARRAY['pic13.jpg', 'pic14.jpg']);`

    const user_8 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (8, '1989-06-08', 'Female', 'Heterosexual', 'Bookworm and writer.', ARRAY['#books', '#writing'], ARRAY['pic15.jpg', 'pic16.jpg']);`

    const user_9 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (9, '1994-02-19', 'Male', 'Gay', 'Tech enthusiast and coder.', ARRAY['#tech', '#coding'], ARRAY['pic17.jpg', 'pic18.jpg']);`

    const user_10 = `INSERT INTO profile (user_id, date_of_birth, sex, sexual_orientation, biography, tags, pictures)
    VALUES (10, '1993-07-30', 'Female', 'Heterosexual', 'Traveler and adventurer.', ARRAY['#travel', '#adventure'], ARRAY['pic19.jpg', 'pic20.jpg']);`

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
                console.log(`profile ${i + 1} created`);
            }
        });
    }
}

export default createProfiles
