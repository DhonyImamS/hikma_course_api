const collectionDataTest = {
    version1: {
        nama: 'Dhony',
        job: 'Tester'
    },
    version2: {
        nama: '',
        job: 'Tester'
    },
    version1: {
        nama: 1123,
        job: 'Tester'
    }
}

function createUserData(namaUser, jobUser) {
    const data = {
        "name": namaUser,
        "job": jobUser
    };

    return data;
}

module.exports = {
    createUserData,
    collectionDataTest
}