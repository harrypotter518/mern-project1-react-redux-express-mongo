//import express from 'express'
const express = require('express');
//import dotenv from 'dotenv'
const dotenv = require('dotenv');
//import connectDB from './db.js'
const connectDB = require('./db.js');
//import colors from 'colors'
//import userRoutes from './Routes/userRoutes.js'
const userRoutes = require('./Routes/userRoutes.js');
//import storyRoutes from './Routes/storyRoutes.js'
const storyRoutes = require('./Routes/storyRoutes.js');
//import { notFound, errorHandler } from './Middlewares/errorMiddleware.js'
const { notFound, errorHandler } = require('./Middlewares/errorMiddleware.js');
//import path from 'path'
const path = require('path');
// import appRoot from'app-root-path';
const appRoot = require('app-root-path');
var appDir = appRoot;

dotenv.config()
connectDB()
const app = express()


//const __dirname = path.resolve()

global.__basedir = appDir;

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

app.use('/users' , userRoutes)
app.use('/stories' , storyRoutes)


app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT , () => console.log(`Server Running: ${PORT}`.yellow.bold.underline))