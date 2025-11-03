import express from 'express';
import cors from 'cors'
import techRoutes from '../src/routes/techRoutes.js'

const app = express()
const SERVER_PORT = 3000;
const FRONT_PORT = 5173;

app.use(cors({
    origin: [`http://localhost:${FRONT_PORT}`, `http://127.0.0.1:${FRONT_PORT}`],
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}))

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