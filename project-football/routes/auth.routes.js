const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const { isLoggedOut } = require('../middleware/guard-route')
const uploaderMiddleware = require('../middleware/uploader.middleware')
const saltRounds = 10

router.get('/signup', isLoggedOut,
    (req, res, next) => { res.render('auth/signup') })

router.post('/signup', isLoggedOut, uploaderMiddleware.single('avatar'),
    (req, res, next) => {

        const { avatar } = req.file.path
        let { email, password, username, description } = req.body

        if (description.length === 0) {
            description = 'No existe descripción.'
        }

        bcrypt
            .genSalt(saltRounds)
            .then(salt => bcrypt.hash(password, salt))
            .then(hashedPassword => User.create({ email, username, avatar, description, password: hashedPassword }))
            .then(() => res.redirect('/'))
            .catch(error => next(error))

    })

router.get('/login', isLoggedOut, (req, res, next) => {
    res.render('auth/login')
})

router.post('/login', isLoggedOut, (req, res, next) => {

    const { email, password } = req.body

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcrypt.compareSync(password, user.password) === false) {
                res.render('auth/login', { errorMessage: 'La contraseña es incorrecta' })
                return
            } else {
                req.session.currentUser = user
                console.log('SESiIÓN INICIADA ->', req.session)
                res.redirect('/')
            }
        })
        .catch(error => next(error))
})

router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})

module.exports = router
