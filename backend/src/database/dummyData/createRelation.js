import execute from '../dbHelper.js'

const createRelations = async () => {
    const relation_1 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (1, ARRAY[2, 3, 4], ARRAY[5, 6], 5, POINT(40.7128, -74.0060));
`

    const relation_2 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (2, ARRAY[1, 3, 4], ARRAY[5, 7], 4, POINT(34.0522, -118.2437));
`
    const relation_3 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (3, ARRAY[1, 2, 4], ARRAY[5, 8], 3, POINT(51.5074, -0.1278));
`

    const relation_4 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (4, ARRAY[1, 2, 3], ARRAY[5, 9], 2, POINT(48.8566, 2.3522));
`

    const relation_5 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (5, ARRAY[1, 2, 3], ARRAY[6, 10], 4, POINT(35.682839, 139.759455));
`

    const relation_6 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (6, ARRAY[1, 2, 3], ARRAY[7, 9], 3, POINT(40.4319, -3.7089));
`

    const relation_7 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (7, ARRAY[1, 2, 3], ARRAY[8, 10], 2, POINT(41.9028, 12.4964));
`

    const relation_8 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (8, ARRAY[1, 2, 3], ARRAY[9], 1, POINT(45.4215, -75.6919));
`

    const relation_9 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (9, ARRAY[1, 2, 3], ARRAY[10], 5, POINT(34.0522, -118.2437));
`

    const relation_10 = `
INSERT INTO relation (user_id, visited_by, liked_by, fame_rating, gps_position)
VALUES (10, ARRAY[1, 2, 3], ARRAY[]::integer[], 3, POINT(37.7749, -122.4194));
`

const usersQueries = [
    relation_1,
    relation_2,
    relation_3,
    relation_4,
    relation_5,
    relation_6,
    relation_7,
    relation_8,
    relation_9,
    relation_10
];

for (let i = 0; i < usersQueries.length; i++) {
    await execute(usersQueries[i]).then((result) => {
        if (result) {
            console.log(`relation ${i + 1} created`);
        }
    });
}
}

export default createRelations
