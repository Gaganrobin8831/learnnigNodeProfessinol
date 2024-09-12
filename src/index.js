require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')
const connectDB = require('./DB/database.js')
const router = require('./routes/app.router.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views",path.resolve("./src/views"))

app.use('/',router)



connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server run on http://localhost:${process.env.PORT}/`);

})