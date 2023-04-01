const httpCaller = require('supertest');
const reqresAPI = httpCaller('https://reqres.in/api/');

function createUser(namaUser, jobUser) {
    return reqresAPI
        .post('users')
        .send({
            "name": namaUser,
            "job": jobUser
        });
};

module.exports = {
    createUser,
};