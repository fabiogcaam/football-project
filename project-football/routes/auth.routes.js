const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const { isLoggedOut } = require('../middleware/route-guard')
const saltRounds = 10

<<<<<<< HEAD
// Signup
router.get('/signup', isLoggedOut, (req, res, next) => res.render('auth/signup'))
router.post('/signup', isLoggedOut, (req, res, next) => {
=======
router.get('/signup', (req, res, next) => res.render('auth/signup'))
router.post('/signup', (req, res, next) => {
>>>>>>> 68ae3d5283fb146c83d6e7dd47a90123ffb9fbfa

    let { email, userPwd, username, avatar, description } = req.body

    if (avatar.length === 0) {
        avatar = 'https://i.stack.imgur.com/l60Hf.png'
    }

    if (description.length === 0) {
        description = 'No existe descripción.'
    }

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(userPwd, salt))
        .then(hashedPassword => User.create({ email, username, avatar, description, password: hashedPassword }))
        .then(createdUser => {

            res.redirect('/')
        })
        .catch(error => next(error))


})


router.get('/login', (req, res, next) => res.render('auth/login'))
router.post('/login', (req, res, next) => {

    const { email, userPwd } = req.body

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'La contraseña es incorrecta' })
                return
            } else {
                req.session.currentUser = user
                res.redirect('/')
            }
        })
        .catch(error => next(error))
})


router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/login'))
})

module.exports = router
