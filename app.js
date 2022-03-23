const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const IndexRouter = require('./routers/indexRouter')
const app = express()
// require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname,'./public')))
app.use(express.static('./client/build'))
app.use('/', IndexRouter)

app.listen(process.env.PORT || 5000)