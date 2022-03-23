const router = require('express').Router()
const UserRouter = require('./userRouter')
const CartRouter = require('./cartRouter')
const ProductRouter = require('./productRouter')
const ProductCodeRouter = require('./productCodeRouter')
const OrderRouter = require('./orderRouter')
const path = require('path')

router.use('/user', UserRouter)
router.use('/cart', CartRouter)
router.use('/product', ProductRouter)
router.use('/productCode', ProductCodeRouter)
router.use('/order', OrderRouter)

router.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

module.exports = router