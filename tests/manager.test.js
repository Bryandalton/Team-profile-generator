const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should return an object containing name, id, and email', () => {
            const obj = new Manager();

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
            expect('officeNum' in obj).toEqual(true)
        })

    })
 
})