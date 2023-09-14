import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import connectDB from './src/database/connection.js'
import initTables from './src/database/tableCreation.js'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())

await connectDB()
await initTables()

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
