// require('dotenv').config()
const jwt = require('jsonwebtoken')

// console.log(process.env.SALT)
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SALT,{
        expiresIn:"20s"
    })
}
const RefreshToken = (payload) => {
    return jwt.sign(payload, process.env.SALTREFRESH,{
        expiresIn:"1d"
    })
}

module.exports = {
    generateToken,
    RefreshToken
}