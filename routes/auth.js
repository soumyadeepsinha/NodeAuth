const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { registerValidation } = require('../validation')

//! Router
router.post('/register', async (req, res) => {
  //* validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message)

  //* is user already registered
  const emailExists = await User.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).send('Email already registered')

  //? password hashing
  const salt = await bcrypt.genSalt(10);
  const hash_Password = await bcrypt.hash(req.body.password, salt)

  //? user validation
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash_Password
  });
  try {
    const savedUser = await user.save()
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router