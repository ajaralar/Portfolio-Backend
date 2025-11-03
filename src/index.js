import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Connected',
    })
})

app.get('/tech', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech',
    })
})

app.get('/tech/about', (req, res) => {
    res.status(200).send({
        message: 'Connected to about',
    })
})

app.get('/tech/resume', (req, res) => {
    res.status(200).send({
        message: 'Connected to resume',
    })
})

app.get('/tech/connect', (req, res) => {
    res.status(200).send({
        message: 'Connected to connect',
    })
})

app.get('/tech/projects', (req, res) => {
    res.status(200).send({
        message: 'Connected to projects',
    })
})

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server running on ${PORT}`)
})