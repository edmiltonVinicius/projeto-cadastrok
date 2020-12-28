const express = require('express')
const router = express.Router()
const crudOperationsContact = require('./crud_operations_contact')
const middlleware = require('./middleware_jwt')
const User = require('../database/user_schema')

router.use(crudOperationsContact)

router.get('/', middlleware, (req, res) => {
    const idUser = req.idUser
    User.findById(idUser, {_id: 0, password:0}, (err, adventure) => {
        if(err) return res.status(500).send('Sorry, there was an error, please try again.')
        if(adventure.firstAccess === true){
            return res.status(200).render('layouts/dashboard', {user: adventure, firstAccess: 'd-block', cardPanel: 'd-none'})
        }
        return res.status(200).render('layouts/dashboard', {user: adventure, firstAccess: 'd-none', cardPanel: ''})
    } )
})

router.patch('/firstAccess', middlleware, (req, res) => {
    const idUser = req.idUser
    User.findByIdAndUpdate(idUser, {firstAccess: false}, (err) => {
        if (err) return console.log(err)
        return res.status(204).send('Upadate Success')
    })
})



module.exports = router