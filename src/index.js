require('dotenv').config()
const express = require('express')

const app = express()
const connectDB = require('./DB/database.js')

connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server run on http://localhost:${PORT}/`);

})