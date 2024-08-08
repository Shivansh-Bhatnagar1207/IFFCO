const express = require('express')
const { createReport, getReport, deleteReport, getSingleReport, updateReport } = require('../controllers/ReportController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
router.use(requireAuth)


router.post('/newreport/', createReport)
router.get('/reportdetail', getReport)
router.delete('/reportdetail/:id', deleteReport)
router.get('/reportdetail/:id', getSingleReport)
router.patch('/newreport/:id', updateReport)

module.exports = router