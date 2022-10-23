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
    getName(){} //inquirer.promt({})
    getId(){}
    getEmail(){}
    getRole(){return 'Employee'}
}

class Manager extends Employee {
    constructor(officeNum) {
        

        super(name, id, email, role)
    }
}

class Engineer extends Employee {
    constructor(github, role){
    this.github = github
    this.role = 'Engineer'


    super(name, id, email, role)
    }
    getGithub(){}
}

class Intern extends Employee {
    constructor(school, role){
        this.school = school
        this.role = 'Intern'

        super(name, id, email, role)

    }
    getSchool(){}
}


inquirer.promt()
.then()