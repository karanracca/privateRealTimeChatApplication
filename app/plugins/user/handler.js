const mongoose = require('mongoose');
const UserModel = require('../../models/user.model');
const signale = require('signale');
const jwt = require('jsonwebtoken');
const boom = require('boom');

createToken = (payload) => {
    return jwt.sign(payload, '3BE09269575E74AD9525B05655344E6CBEAE4C46DE92ABF06B85E5D58C9B177D');
}

module.exports.login = async (request, h) => {
    return new Promise((res, rej) => {
        UserModel.findOne({
            'email': request.payload.username,
            'password': request.payload.password
        },
            'fullname nickname email',
            function (err, user) {
                if (err || !user) {
                    signale.error(err.message);
                    res(boom.notFound("User not found"));
                } else {
                    res({payload: user, message: 'Login Success' })
                }
            });
    });
}

module.exports.register = async (request, h) => {
    return UserModel.create({
        fullname: request.payload.fullname,
        nickname: request.payload.nickname,
        email: request.payload.email,
        password: request.payload.password,
        avatar: request.payload.avatar
    }).then((result) => {
        signale.success(`${result.fullname} registered successfully`);
        return { success: true, payload: `User ${request.payload.fullname} successfully registered` };
    }).catch(err => {
        signale.error(err);
        return boom.badImplementation("Unable to register neu user. Please try again.")
    });
}

// module.exports.getAllUsers = async (request, h) => {
//     try {
//         const User = mongoose.model('User', require('../../models/user-model'));

//         return await User.find({}, 'fullname nickname email', function (err, users) {
//             if (err) throw err;
//             return { success: true, payload: users };
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }