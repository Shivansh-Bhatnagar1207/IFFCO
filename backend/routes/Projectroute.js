const express = require('express')
const { createProject, getProject, deleteProject } = require('../controllers/ProjectController')

const router = express.Router()

router.post('/', createProject)
router.get('/dashboard', getProject)
router.delete('/dashboard/:id', deleteProject)

module.exports = router