const express = require('express')
const app = express()
const libraryRoute = require('./routes/library')
const mongoose = require('mongoose')

const PORT = 3500


app.use(express.json())
app.use('/api', libraryRoute);



mongoose.connect('mongodb://127.0.0.1:27017/library-api', { useNewUrlParser: true });
mongoose.connection.on("error", err => {
    console.error(`${err.message}`)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})