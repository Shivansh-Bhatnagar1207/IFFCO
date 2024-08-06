const express = require('express')
const { createProject, getProject, deleteProject, getSingleProject, editProject } = require('../controllers/ProjectController')

const router = express.Router()

router.post('/', createProject)
router.get('/dashboard', getProject)
router.delete('/dashboard/:id', deleteProject)
router.get('/dashboard/:id', getSingleProject)
router.patch('/dashboard/:id', editProject)
module.exports = router