// import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    firstname: { type: String , required: true },
    lastname: { type: String , required: true },
    age: { type: String , required: true },
    region: { type: String },
    image: { type: String , default: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' },
    email: { type: String , required: true , lowercase: true },
    password: { type: String , required: true },
    resetToken: { type: String },
    expireToken: { type: Date },
    followers: [{ type: mongoose.Schema.Types.ObjectId , ref: 'User' }],
    followings: [{ type: mongoose.Schema.Types.ObjectId , ref: 'User' }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId , ref: 'Story' }],
    feedbacks: [
        {
            user: { type: mongoose.Schema.Types.ObjectId , ref: 'User' },
            username: { type: String , required: true },
            message: { type: String , required: true },
            replayMessage: { type: String } ,
            createdAt: { type: Date , required: true , default: Date.now() }
        }
    ],
    isAuthor: { type: Boolean , default: false , required: true }
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password)
}


userSchema.pre('save' , async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
})

const User = mongoose.model('User' , userSchema)

module.exports = User