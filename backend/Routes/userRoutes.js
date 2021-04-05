// import express from 'express'
const express = require('express');
// import { 
//     activateAccount, 
//     getUsers, 
//     login, 
//     register,
//     deleteUsers,
//     userDelete,
//     userFollow,
//     userUnfollow,
//     getUserById,
//     updateProfile,
//     resetPassword,
//     newPassword,
//     upload

// } from '../Controllers/userControllers.js'
const {activateAccount, 
    getUsers, 
    login, 
    register,
    deleteUsers,
    userDelete,
    userFollow,
    userUnfollow,
    getUserById,
    updateProfile,
    resetPassword,
    newPassword,
    upload} = require('../Controllers/userControllers.js')
// import protect from '../Middlewares/authMiddleware.js'
const protect = require('../Middlewares/authMiddleware.js');
const router = express.Router()


router.route('/')
    .get(getUsers)
    .delete(deleteUsers)

router.route('/save').post(save)

router.route('/register').post(register)
router.route('/upload').post(upload)
router.route('/activate-account').post(activateAccount)
router.route('/login').post(login)
router.route('/profile')
    .delete(protect , userDelete)
    .put(protect , updateProfile)


router.route('/follow').put(protect , userFollow)
router.route('/unfollow').put(protect , userUnfollow)

router.route('/reset-password').post(resetPassword)
router.route('/new-password').put(newPassword)


router.route('/:id').get(getUserById)


module.exports = router