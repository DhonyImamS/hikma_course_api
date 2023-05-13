const { expect } = require('chai');
const apiUser = require('../api/api_user_reqres');
const scenario = require('../testcase/testcase_reqres');
const apiData = require('../data/user_request_data');
const apiDataUserValidJSON = require('../data/user_request_valid_data.json');

let variable;

describe('Test Suite - API User', async () => {
    
    beforeEach(async () => {
        console.log('Start on Every TestCase');
    });

    before(async () => {
        console.log('Bismillah');
        variable = 'DHONYPRIKITIEW';
    });

    it(scenario.testcaseAPI.scenario1, async () => {
         // test automation code here 
        const namaUser = variable;
        const jobUser = 'Tester';
        const bodyRequest = apiData.createUserData(namaUser, jobUser);

        const response = await apiUser.createUser(bodyRequest);
        console.log(response.status);
        console.log(response.body);

        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(namaUser);
        expect(response.body.job).to.equal(jobUser);
    });

    it(scenario.testcaseAPI.scenario2, async () => {
        // test automation code here 
        const invalidBodyRequest = {
            name: 'Dhony',
        };

        const response = await apiUser.createUser2(invalidBodyRequest);
        console.log(response.status);
        console.log(response.body);

        expect(response.status).to.equal(422);
    });

    it(scenario.testcaseAPI.scenario2, async () => {
        // test automation code here 
        const bodyRequest = apiData.collectionDataTest;

        for (const key in bodyRequest) {
            const response = await apiUser.createUser2(bodyRequest[key]);
            console.log(response.status);
            console.log(response.body);

            expect(response.status).to.equal(422);
        }
        
    });

    it(scenario.testcaseAPI.scenario3, async () => {
        // test automation code here 
        const response = await apiUser.createUser(apiDataUserValidJSON);
        console.log(response.status);
        console.log(response.body);

        expect(response.status).to.equal(201);
    });
});