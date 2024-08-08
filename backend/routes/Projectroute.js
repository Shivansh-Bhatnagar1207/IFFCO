const express = require('express')
const { createProject, getProject, deleteProject, getSingleProject, editProject } = require('../controllers/ProjectController')
const requireAuth = require('../middleware/requireAuth')



const router = express.Router()
router.use(requireAuth)


router.post('/', createProject)
router.get('/dashboard', getProject)
router.delete('/dashboard/:id', deleteProject)
router.get('/dashboard/:id', getSingleProject)
router.patch('/dashboard/:id', editProject)
module.exports = router