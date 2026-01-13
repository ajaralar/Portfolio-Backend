import express from "express"
import { homeData } from "../data/homeData.js"

const router = new express.Router()

router.get('/', (req, res) => {
    res.status(200).send(homeData)
})

export default router