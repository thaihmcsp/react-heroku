const router = require('express').Router()
const Controller = require('../controllers/productCodeController')

router.get('/', Controller.getAllCode)
router.post('/', Controller.createCode)
router.delete('/:id', Controller.deleteCode)

module.exports = router