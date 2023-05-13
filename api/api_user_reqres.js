const httpCaller = require('supertest');
const reqresAPI = httpCaller('https://reqres.in/api/');
const reqresAPI2 = httpCaller('https://api.rey.id/user/v1/');

function createUser(bodyRequest) {
    return reqresAPI
        .post('users')
        .send(bodyRequest);
};

function createUser2(bodyRequest) {
    return reqresAPI2
        .post('auth/login')
        .send(bodyRequest);
};

module.exports = {
    createUser,
    createUser2
};