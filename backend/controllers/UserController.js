const User = require('../models/User')
const jwt = require('jsonwebtoken')



const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


const LoginUser = async (req, res) => {
    const { Email, Name, UserId, Password } = req.body
    try {
        const user = await User.login(Email, Name, UserId, Password)
        const token = createToken(user._id)
        res.status(200).json({ Email, Name, UserId, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const SignUpUser = async (req, res) => {
    const { Email, Password, Name, Mobile, UserId } = req.body
    try {
        const user = await User.signup(Email, Password, Name, Mobile, UserId)

        const token = createToken(user._id)

        res.status(200).json({ Email, Name, UserId, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { LoginUser, SignUpUser }