const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Project = new Schema({

    Project_Name: {
        type: String,
    },
    Project_head: {
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
    }
})

module.exports = mongoose.model('Project', Project)