const express = require('express')
const path = require('path')

const parkRoutes = require('./routes/parks')
const commentRoutes = require('./routes/comments')
const toVisitRoutes = require('./routes/toVisit')
const ratingRoutes = require('./routes/rating')
const favParksRoutes = require('./routes/favParks')
const imagesRoutes = require('./routes/images')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ limit: '50mb', extended: true }))

server.use('/api/v1/park', parkRoutes)
server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/visit', toVisitRoutes)
server.use('/api/v1/rating', ratingRoutes)
server.use('/api/v1/fav', favParksRoutes)
server.use('/api/', imagesRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// server.post('/api/upload', async (req, res) => {
//   try {
//     const fileStr = req.body.data
//     console.timeLog(fileStr)
//     const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: 'dev_setups'
//     })
//     console.log(uploadResponse)
//     res.json({ msg: 'yaya' })
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ err: 'Something went wrong' })
//   }
// })

module.exports = server
