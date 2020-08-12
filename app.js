const express = require('express')
//* import database
const ConnectMongo = require('./database/db')
//* import routes
const authentication = require('./routes/auth')
require('dotenv').config()
//* post request
const post = require('./routes/posts')

const app = express()

//* database config function
ConnectMongo()

//? middleware
app.use(express.json())

//? route middlewares
//* register & login
app.use('/user', authentication)
//! OR app.use('/user', require('./routes/auth'))
//* get posts from user
app.use('/user', post)
//! OR app.use('/user', require('./routes/posts'))

const PORT = process.env.PORT || 3000

//* server starting
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})