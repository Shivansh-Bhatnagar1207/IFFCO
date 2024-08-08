const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const UserSchema = Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true,
    },
    UserId: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true,
    }

})

UserSchema.statics.signup = async function (Email, Password, Name, Mobile, UserId) {

    if (!Email || !Password || !Name || !Mobile || !UserId) {
        throw Error('All Fields Must be filled')
    }

    if (!validator.isEmail(Email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(Password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ Email })
    if (exists) {
        throw Error('Email already in Use')
    }
    const salt = await bycrpt.genSalt(10)
    const hash = await bycrpt.hash(Password, salt)

    const user = await this.create({ Email, Password: hash, Name, Mobile, UserId })
    return user
}

UserSchema.statics.login = async function (Email, Name, UserId, Password) {

    if (!Email || !Password || !Name || !UserId) {
        throw Error('All Fields Must be filled')
    }
    const user = await this.findOne({ Email })
    if (!user) {
        throw Error('Incorrect Email')
    }

    const match = await bycrpt.compare(Password, user.Password)
    if (!match) {
        throw Error("Incorrect password")
    }
    return user
}

module.exports = mongoose.model('User', UserSchema)