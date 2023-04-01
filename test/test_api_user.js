const { expect } = require('chai');
const apiUser = require('../api/api_user_reqres');
const scenario = require('../testcase/testcase_reqres');

describe('Test Suite - API User', async () => {
    it(scenario.testcaseAPI.scenario1, async () => {
        // test automation code here 
        const namaUser = 'Dhony';
        const jobUser = 'Tester';

        const response = await apiUser.createUser(namaUser, jobUser);
        console.log(response.status);
        console.log(response.body);

        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(namaUser);
        expect(response.body.job).to.equal(jobUser);
    });
});