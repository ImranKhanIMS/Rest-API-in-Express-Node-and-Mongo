const express = require('express')
const router = new express.Router()
const Student = require('../models/students')

// create a new student
router.post('/students', (req, res) => {
    const user = new Student(req.body);

    user.save().then(() => {
        res.status(201).send(req.body)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Getting all students with async await
router.get('/students', async (req, res) => {
    try{
        const studentData = await Student.find()
        res.send(studentData)
    }catch(e) {
        res.status(500).send(e)
    }
})

// Getting a specifiec student with async await
router.get('/students/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id)
        if(!studentData)
            return res.status(404).send()
        else
            res.send(studentData)
    }catch(e) {
        res.status(500).send(e)
    }
})

// Update a specifiec student record
router.patch('/students/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        if(!updateStudent)
            return res.status(404).send()
        else
            res.send(updateStudent)
    }catch(e) {
        res.status(500).send(e)
    }
})

// Delete a specifiec student record
router.delete('/students/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if(!deleteStudent)
            return res.status(404).send()
        else
            res.send(deleteStudent)
    }catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router