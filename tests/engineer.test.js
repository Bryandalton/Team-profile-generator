const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should return an object containing name, id, and email', () => {
            const obj = new Engineer();

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
            expect('github' in obj).toEqual(true)
        })
    })
})