import express from "express";
import { aboutData } from "../data/aboutData.js";

const router = new express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech'
    })
})

router.get('/about', (req, res) => {
    res.status(200).json(aboutData)
})

router.get('/resume', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech/resume'
    })
})

router.get('/connect', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech/connect'
    })
})

router.get('/projects', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech/projects'
    })
})

export default router;