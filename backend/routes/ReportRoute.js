const express = require('express')
const { createReport, getReport, deleteReport } = require('../controllers/ReportController')

const router = express.Router()

router.post('/newreport/', createReport)
router.get('/reportdetail', getReport)
router.delete('/reportdetail/:id', deleteReport)

module.exports = router