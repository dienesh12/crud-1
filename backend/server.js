const { application } = require('express')
const express = require('express')
const colors = require(`colors`)
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require(`cors`)
const {errorHandler} = require(`./Middleware/errorMiddleware`)

app.use(cors())

connectDB()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//app.use(express.static("uploads"))

app.use('/',require('./routes/studRoutes')) //sends the req to studRoutes

app.use(errorHandler)

app.listen(PORT,() => console.log(`Server Started on port ${PORT}`))
