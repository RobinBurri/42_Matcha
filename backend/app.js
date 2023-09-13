import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import { success } from './helper.js'
import initTables from './src/database/tableCreation.js'

const app = express()
const port = 3000


app.use(morgan('dev'))
app.use(bodyParser.json())

// initTables()

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
