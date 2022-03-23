const router = require('express').Router()
const adminRouter = require('./adminRouter')
const {createNewUser, loginUser} = require('../controllers/userController')

router.use('/admin', adminRouter)

router.post('/', createNewUser)

router.post('/login', loginUser)

module.exports = router