const express = require('express')
const {createProject,getProject} = require('../controllers/ProjectController')

const router = express.Router()

router.post('/project/',createProject)
router.get('/dashboard',getProject)

module.exports = router