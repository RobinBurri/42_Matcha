import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import connectDB from './src/database/connection.js'
import dropAllTables from './src/database/dummyData/cleanData.js'
import generateAllData from './src/database/dummyData/generateAllData.js'
import initTables from './src/database/tableCreation.js'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())

await connectDB()
await initTables()

app.get('/dummy', (req, res) => {
    generateAllData()
    res.send('Dummy data created!')
})

app.get('/clean', (req, res) => {
    dropAllTables()
    res.send('Cleaned!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})