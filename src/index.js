const express = require("express")
const apiRouter = require("./routes/routes")

const app = express.env.port || 3000; 
app.use(express.json())

app.use("/whatsapp", apiRouter);