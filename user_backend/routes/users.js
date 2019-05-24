const { Router } = require('express')
const router = Router()
const User = require('../models/User')

router.get('/api/users', async (req, res) =>{
    let users = await User.find()
    res.json({users: users})
})

router.post('/api/users', async(req, res) => {
    const user = new User(req.body)
    await user.save()
    .then(user => {
        res.json('User added successfully')
    })
    .catch(err => {
        res.status(400).send('Unable to save to database')
    })
})

module.exports = router