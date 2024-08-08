const express = require('express')

const { LoginUser, SignUpUser } = require("../controllers/UserController")


const router = express.Router()

router.post('/', LoginUser)
router.post('/signup', SignUpUser)


module.exports = router