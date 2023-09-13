import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { success } from './helper.js'
import pkg from 'pg';
const { Client } = pkg;

let pokemons = [
    {
        id: 1,
        name: 'Bulbizarre',
        hp: 25,
        cp: 5,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        types: ['Plante', 'Poison'],
        created: new Date(),
    },
    {
        id: 2,
        name: 'Salamèche',
        hp: 28,
        cp: 6,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        types: ['Feu'],
        created: new Date(),
    },
    {
        id: 3,
        name: 'Carapuce',
        hp: 21,
        cp: 4,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
        types: ['Eau'],
        created: new Date(),
    },
    {
        id: 4,
        name: 'Aspicot',
        hp: 16,
        cp: 2,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
        types: ['Insecte', 'Poison'],
        created: new Date(),
    },
    {
        id: 5,
        name: 'Roucool',
        hp: 30,
        cp: 7,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
        types: ['Normal', 'Vol'],
        created: new Date(),
    },
    {
        id: 6,
        name: 'Rattata',
        hp: 18,
        cp: 6,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
        types: ['Normal'],
        created: new Date(),
    },
    {
        id: 7,
        name: 'Piafabec',
        hp: 14,
        cp: 5,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
        types: ['Normal', 'Vol'],
        created: new Date(),
    },
    {
        id: 8,
        name: 'Abo',
        hp: 16,
        cp: 4,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
        types: ['Poison'],
        created: new Date(),
    },
    {
        id: 9,
        name: 'Pikachu',
        hp: 21,
        cp: 7,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
        types: ['Electrik'],
        created: new Date(),
    },
    {
        id: 10,
        name: 'Sabelette',
        hp: 19,
        cp: 3,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
        types: ['Normal'],
        created: new Date(),
    },
    {
        id: 11,
        name: 'Mélofée',
        hp: 25,
        cp: 5,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
        types: ['Fée'],
        created: new Date(),
    },
    {
        id: 12,
        name: 'Groupix',
        hp: 17,
        cp: 8,
        picture:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
        types: ['Feu'],
        created: new Date(),
    },
]

function getUniqueId() {
    const pokemonsIds = pokemons.map((pokemon) => pokemon.id)
    const maxId = Math.max(...pokemonsIds)
    return maxId + 1
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 3000

console.log(`Postgres user: ${process.env.POSTGRES_USER}`)

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'postgresql',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})
try {
    client.connect(function (err) {
        if (err) throw err
        console.log('Connected!')
    })
} catch (err) {
    console.log(err)
}

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/api/pokemons', (req, res) => {
    res.json(success('Pokemons list found', pokemons))
})

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find((pokemon) => pokemon.id === id)
    if (!pokemon) {
        return res.status(404).send('Pokemon not found')
    }
    const msg = 'Pokemon found'
    res.json(success(msg, pokemon))
})

app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId()
    let pokemonCreated = {
        ...req.body,
        id,
        created: new Date(),
    }
    console.log(pokemonCreated)
    pokemons.push(pokemonCreated)
    const msg = `Pokemon ${pokemonCreated.name} created`
    res.json(success(msg, pokemonCreated))
    pokemons.push({ 'hello there': 'world' })
})

app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let pokemonUpdated = {
        ...req.body,
        id,
    }
    pokemons = pokemons.map((pokemon) => {
        if (pokemon.id === id) {
            return pokemonUpdated
        }
        return pokemon
    })
    const msg = `Pokemon ${pokemonUpdated.name} updated`
    res.json(success(msg, pokemonUpdated))
})

app.delete('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const deletedPokemon = pokemons.find((pokemon) => pokemon.id === id)
    if (!deletedPokemon) {
        return res.status(404).send('Pokemon not found')
    }
    pokemons = pokemons.filter((pokemon) => pokemon.id !== id)
    const msg = `Pokemon ${deletedPokemon.name} was deleted`
    res.json(success(msg, { deletedPokemon }))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
