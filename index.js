const inquirer = require('inquirer')
const fs = require('fs')


class Employee {
    constructor(name, id, email, role){
       const employeeQuestions = [{
        type: 'input',
        name: 'name',
        message: 'Employee name: ' 
       },{
        type: 'input',
        name: 'id',
        message: 'Employee id: '
       },{
        type: 'input',
        name: 'email',
        message: 'Employee email: '
       },{
        type: 'list',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'Employee']
       }]
    }
    getName(){}
    getId(){}
    getEmail(){}
    getRole(){}
}

class Manager extends Employee {
    constructor(officeNum) {
        const managerQuestion = {
            type: 'input',
            name: 'officeNum',
            message: 'Office number: '
        }
        super(name, id, email, role)
    }
}

class Engineer extends Employee {
    constructor(github){
        const engineerQuestion = {
            type: 'input',
            name: 'github',
            message: 'Github username: '
        }


    super(name, id, email, role)
    }
    getGithub(){}
}

class Intern extends Employee {
    constructor(school){
        const internQuestion = {
            type: 'input',
            name: 'school',
            message: 'School or institution: '
        }

        super(name, id, email, role)

    }
    getSchool(){}
}


inquirer.promt()
.then()