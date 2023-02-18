const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
<<<<<<< HEAD
=======

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
<<<<<<< HEAD
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
=======
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
<<<<<<< HEAD
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('users', userSchema);
=======
        exp: parseInt(expiry.getTime() / 1000, 10), 
        }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('users', userSchema);
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
