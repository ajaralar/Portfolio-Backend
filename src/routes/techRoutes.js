import express from "express";
import { validationResult } from "express-validator";
import { aboutData } from "../data/aboutData.js";
import { footerData } from "../data/footerData.js"
import { resumeData } from "../data/resumeData.js";
import { projectData } from "../data/projectData.js";
import { connectValidation } from "../utils/connectValidation.js";
import { sendContactEmail } from "../utils/emaillService.js";

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

router.post('/connect', connectValidation, async (req, res) => {
    // Form validation
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const formData = req.body

    // Sending email
    const emailSent = await sendContactEmail(formData);

    if (!emailSent) {
        return res.status(500).json({
            message: 'Your message was received, but there was an error sending the notification. Please try again or connect via LinkedIn.',
            status: 'error'
        });
    }

    // Success response
    res.status(200).json({
        message: 'Form submitted successfully! Thank you for connecting',
        status: 'success',
        received: formData
    })
})

router.get('/projects', (req, res) => {
    res.status(200).send(projectData)
})

router.get('/footer', (req, res) => {
    res.status(200).json(footerData);
});

export default router;