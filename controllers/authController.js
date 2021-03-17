const User = require('../models/User')
const bcrypt = require('bcrypt')

const login = async (req, res, next) => {
  const { username, password } = req.body

  let user = await User.findOne({ username })
  if (!user) return res.status(400).send('Invalid Credentials')

  const match = await bcrypt.compare(password, user.password)

  if (!match) return res.status(400).send('Invalid Credentials')

  const token = user.createToken()
  res.set('x-authorization-token', token).send('User logged in successfully')
}

module.exports = {
  login
}
