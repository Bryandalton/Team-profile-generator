const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an object containing employee information', () => {
            const obj = new Employee('Bob', 545, 'Bob@corp.net');
            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
            expect(obj).toEqual({
                name: 'Bob',
                id: 545,
                email: 'Bob@corp.net'
             })
        })
    })
})