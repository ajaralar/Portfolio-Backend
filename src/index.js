import express from 'express';
import techRoutes from '../src/routes/techRoutes.js'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Connected to home',
        routes: ['/tech']
    })
})

app.use('/tech', techRoutes)

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server running on ${PORT}`)
})