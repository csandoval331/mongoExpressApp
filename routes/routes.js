const express = require('express')
const router = express.Router()


router.post('/post', (req, res) => {
    console.log(req.body)
    res.send(`Post API ${ req.body.username} and ${req.body.password}`)
})

router.get('/getall', (req, res) => {
    res.send("Get all API")
})

router.get('/getOne/:id', (req, res) => {
    console.log(req.params)
    res.send(`Get by :id API, id: \n ${req.params.id}`)
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router