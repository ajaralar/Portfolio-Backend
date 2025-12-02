import express from 'express';
import cors from 'cors'
import techRoutes from '../src/routes/techRoutes.js'
import dotenv from 'dotenv';

// Load environment variables
dotenv.config()
const FRONT_DOMAIN = process.env.FRONT_DOMAIN
const SERVER_PORT = process.env.SERVER_PORT

// Initialize express
const app = express()

// Give front-end access to data
app.use(cors({
    origin: [`${FRONT_DOMAIN}`],
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Connected to home',
        routes: ['/tech']
    })
})

app.use('/tech', techRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})