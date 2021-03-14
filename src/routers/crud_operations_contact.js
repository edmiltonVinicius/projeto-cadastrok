const express = require('express')
const middlleware = require('./middleware_jwt')
const User = require('../database/user_schema')
const router = express.Router()

router.post('/create', middlleware, (req, res) => {
    const idUser = req.idUser
    const { nameContact, numberContact, imageContact, sexoContact, emailContact } = req.body
    const newContact = { nameContact, numberContact, imageContact, sexoContact, emailContact }

    User.findById({_id: idUser}, (err, result) => {
        if(err) return res.status(500).send('Erro na consulta' + err)

        const isNewContact = result.contacts.filter(element => {
            if(element.emailContact == emailContact){
                return element
            }
        })
        
        if(isNewContact.length != 0) {
            return res.status(500).json({
                error: true,
                message: 'Já cadastrado'
            })
        } else {
            result.contacts.push(newContact)
            result.save(err => {
                if(err) {
                    console.log(err)
                    return res.status(500).send('Erro on Register') 
                }

                return res.status(200).json({
                    error: false,
                    message: 'Contato cadastrado'
                })
            })
        }
    }) 
})

router.get('/read', middlleware, (req, res) => {
    const idUser = req.idUser
    const { nameContactForConsult, emailContactForConsult } = req.body
    
    User.findById({_id: idUser}, {contacts: 1}, (err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: 'Erro Query Contact'
            })
        }

        const contactFounds = result.contacts.filter(element => {
            if(element.nameContact == nameContactForConsult || element.emailContact == emailContactForConsult){
                return element
            }
        })

        if(contactFounds.length == 0) {
            return res.status(404).json({
                error: true,
                message: 'Contact not found'
            })
        } else {            
            return res.status(200).json({
                error: false,
                contacts: contactFounds
            })
        }
    })
})

router.put('/update', middlleware, (req, res) => {
    const idUser = req.idUser
    const { idContactForUpdate, newContactName, newContactNumber, newContactEmail, newContactSexo } = req.body

    User.findById({_id: idUser}, {contacts: 1}, (err, result) => {
        if(err) {
            return res.status(500).json({
                error: true,
                message: 'Erro in Query'
            })
        }

        let hasContact = false
        result.contacts.forEach(element => {
            if(element._id == idContactForUpdate) {
                hasContact = true
                newContactName != undefined ? element.nameContact = newContactName : ''
                newContactNumber != undefined ? element.numberContact = newContactNumber : ''
                newContactSexo != undefined ? element.sexoContact = newContactSexo : ''
                newContactEmail != undefined ? element.emailContact = newContactEmail : ''
            }
        })

        if(!hasContact) {
            return res.status(404).json({
                error: true,
                message: 'Contact not found for update'
            })
        }

        User.findByIdAndUpdate({_id: result._id}, {contacts:  result.contacts}, {new: true}, (err, result) => {
            if(err) {
                return res.status(500).json({
                    error: true,
                    message: 'Erro in Update Contact'
                })
            }
            return res.status(200).json({
                error: false,
                contatcs: result
            })
        })
    })
})

router.delete('/delete', middlleware, (req, res) => {
    const idUser = req.idUser
    const { idContactForDelete } = req.body
    
    User.findById({_id: idUser}, {contacts: 1}, (err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: 'Erro Query Contact'
            })
        }

        let hasContact = false
        result.contacts.forEach((element, index) => {
            if(element._id == idContactForDelete){
                result.contacts.splice(index, 1)
                hasContact = true
            } 
        })

        if(!hasContact) {
            return res.status(404).json({
                error: true,
                message: 'Contact not found'
            })
        }

        User.updateOne({_id: result._id}, {contacts:  result.contacts}, (err, result) => {
            if(err) {
                return res.status(500).send('Erro on Delete') 
            }

            if(result.nModified > 0) {
                return res.status(200).json({
                    error: false,
                    message: 'Contact deleted success'
                }) 
            } else {
                return res.status(404).json({
                    error: true,
                    message: 'No contact deleted'
                })
            }
        })
    })
})

module.exports = router