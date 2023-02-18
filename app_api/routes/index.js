const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
=======
const  {expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
<<<<<<< HEAD
    .route('/login')
=======
    .route('/login')    
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
<<<<<<< HEAD
    .get(tripsController.tripsFindCode)
=======
    .get(tripsController.tripsFindByCode)
    .delete(auth, tripsController.tripsDeleteTrip)
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;