const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should return an object containing name, id, and email', () => {
            const obj = new Intern();

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
            expect('school' in obj).toEqual(true)
        })
    })
})