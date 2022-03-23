const router = require('express').Router()
const {adminLogin} = require('../controllers/adminController')
const {checkLogin} = require('../middleWares/checkAuth')
const { checkAdmin } = require('../middleWares/checkRole')

router.post('/login', adminLogin)

router.get('/', checkAdmin, (req,res)=>{
  res.json({user:req.user, mess:'ok', status:200})
})

module.exports = router