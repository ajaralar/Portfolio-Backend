import './config/env.js';
import express from 'express';
import cors from 'cors'
import techRoutes from '../src/routes/techRoutes.js'

// Load environment variables
const FRONT_DOMAIN = process.env.FRONT_DOMAIN
const SERVER_PORT = process.env.SERVER_PORT
const allowedOrigins = [
    `${FRONT_DOMAIN}`,
    'http://192.168.1.172:5173',
    'http://127.0.0.1:5173'
]

// Initialize express
const app = express()

// Parse JSON request
app.use(express.json())

// Give front-end access to data

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}))

// Tells express to use the public folder
app.use(express.static('public'))

// Landing page
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Connected to home',
        routes: ['/tech']
    })
})

// Tech routes
app.use('/tech', techRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})