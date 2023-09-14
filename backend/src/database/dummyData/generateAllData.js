import createProfiles from "./createProfile.js"
import createRelations from "./createRelation.js"
import createUsers from "./createUsers.js"


const generateAllData = async () => {
    await createUsers()
    await createProfiles()
    await createRelations()
}

export default generateAllData