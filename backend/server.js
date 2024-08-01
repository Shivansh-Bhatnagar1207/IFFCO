require('dotenv').config()


const express = require('express')
const ProjectRoutes = require('./routes/Projectroute')
const ReportRoutes = require('./routes/ReportRoute')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use('/project', ProjectRoutes)
app.use('/report', ReportRoutes)


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to DB')
    })
}).catch((error) => {
    console.log(error)
})
