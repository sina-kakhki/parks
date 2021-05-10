const { cloudinary } = require('../cloudinary')
const express = require('express')
const router = express.Router()

module.exports = router

router.get('/images', async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:public/images')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()

  const publicIds = resources.map((file) => file.public_id)
  res.send(publicIds)
})

router.post('/upload', async (req, res) => {
  try {
    const fileStr = req.body.data
    // console.log(fileStr)
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ol81vj4c'
    })
    console.log(uploadResponse)
    res.json({ msg: 'yaya' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ err: 'Something went wrong' })
  }
})
