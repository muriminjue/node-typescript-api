import * as dotenv from "dotenv"
import express from "express"


dotenv.config()

import logger from "./config/logger"
import connect from "./config/db"
import router from "./router"

const PORT = process.env.PORT

const app =express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/" ,router)


app.listen(PORT, ()=>{
    logger.info(`App started on port ${PORT}`)
    connect()
})
