import express from "express";
import { aboutData } from "../data/aboutData.js";
import { footerData } from "../data/footerData.js"
import { resumeData } from "../data/resumeData.js";
import { projectData } from "../data/projectData.js";

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
    res.status(200).send(resumeData)
})

router.get('/connect', (req, res) => {
    res.status(200).send({
        message: 'Connected to tech/connect'
    })
})

router.get('/projects', (req, res) => {
    res.status(200).send(projectData)
})

router.get('/footer', (req, res) => {
    res.status(200).json(footerData);
});

export default router;