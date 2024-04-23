const express = require('express')
const Model = require('../model/model')
const router = express.Router()


router.post('/post', async(req, res) => {
    // res.send(`Post API ${ req.body.username} and ${req.body.password}`)

    console.log(req.body)
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save()
        console.log(dataToSave)
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(200).json({message: error})
    }

})

router.get('/getall', async(req, res) => {
    // res.send("Get all API")
    try{
        const data = await Model.find()
        res.status(200).json(data)

    }
    catch(error){
        res.status(500).json({message: error.message} )
    }

})

router.get('/getOne/:id', async (req, res) => {
    console.log(req.params)
    // res.send(`Get by :id API, id: \n ${req.params.id}`)

    try{
        const data = await Model.findById(req.params.id)
        res.send(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async(req, res) => {
    // res.send('Update by ID API')
    console.log(req.params.id)
    
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}

        const result = await Model.findByIdAndUpdate(id, updatedData, options)
        
        res.send(result)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
router.delete('/delete/:id', async(req, res) => {
    // res.send('Delete by ID API')
    try{    
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)

        console.log(req.params.id)
        console.log(data)
        res.send(`Document has been deleted: ${data}`)
    }catch(error){
        res.status(500).json({message: error.message})
    }

})

module.exports = router