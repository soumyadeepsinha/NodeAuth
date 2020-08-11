const express = require('express')
//* import database
const ConnectMongo = require('./Database/db')
//* import routes
const authentication = require('./routes/auth')
require('dotenv').config()

const app = express()

ConnectMongo()

//? Middleware
app.use(express.json())

//? Route Middleware
app.use('/user', authentication)
//! OR app.use('/user', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})