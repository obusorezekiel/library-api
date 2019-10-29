const express = require('express')
const router = express.Router();
const Library = require('../models/Library')

router.get('/', async (req, res) => {
    try {
        const libraries = await Library.find();
        res.json(libraries)
    }
    catch (e) {
        res.json({ e })
    }
})


router.post('/', async (req, res) => {   
    try {
        const library = await new Library(req.body).save();
        res.json(library)
    }
    catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id', async (req,res) => {
    try{
        const library = await Library.findOne({ _id: req.params.id})
        res.json(library)
    }
    catch(e){
        res.json({ message: e})
    }
})

router.patch('/:id', async (req,res) => {
    try {
        const libraryUpdate = await Library.updateOne(
            { _id: res.params.id },
            { $set: { bookType: req.body.bookType }},
            { $set: { bookNumber: req.body.bookNumber }},
            { $set: { bookName: req.body.bookName }},
            { $set: { author: req.body.author }},
            { $set: { description: req.body.description }}
        )
        res.json(libraryUpdate)
    }
    catch(e){
        res.json({ message: e })
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const deleteLibrary = await Library.deleteOne({ _id: req.params.id })
        res.json(deleteLibrary)
    }
    catch(e){
        res.json({e})
    }
})

module.exports = router