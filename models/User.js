const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, min: 3, max: 25, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.methods.createToken = function () {
  const payload = { _id: this._id, username: this.username }
  const secretKey = process.env.JWT_SECRET
  return jwt.sign(payload, secretKey)
}

const User = mongoose.model('User', userSchema)

module.exports = User
