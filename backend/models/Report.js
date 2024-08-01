const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Report = new Schema({
    Report_type: String,
    Project_name: String,
    Start_Date: Date,
    End_Date: Date,
    Project_Head: String,
    Team_ID: String,
    Description: String
})

module.exports = mongoose.model('Report', Report)