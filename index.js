const express = require('express')
const app = express()
const libraryRoute = require('./routes/library')
const mongoose = require('mongoose')
require('dotenv/config')

const PORT = 3500


app.use(express.json())
app.use('/', libraryRoute);



mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
mongoose.connection.on("error", err => {
    console.error(`${err.message}`)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})