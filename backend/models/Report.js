const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Report = new Schema({
    Report_Type: {
        type: String,
    },
    Project_Name: { type: String, },
    Start_date: { type: String, },
    End_date: { type: String, },
    Project_Head: { type: String, },
    TeamID: { type: String, },
    Description: { type: String, },
    user_id: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Report', Report)