const router = require('express').Router()
const verifing = require('./verifytoken')

//! adding a middleware to GET request for posts
router.get('/posts', verifing, (req, res) => {
  res.send(req.user)
})


module.exports = router