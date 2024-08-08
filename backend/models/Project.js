const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Project = new Schema({

    Project_Name: {
        type: String,
    },
    Project_Head: {
        type: String,
    },
    Start_date: {
        type: String
    },
    End_date: {
        type: String
    },
    Description: {
        type: String,
    },
    Status: {
        type: String
    },
    user_id: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Project', Project)