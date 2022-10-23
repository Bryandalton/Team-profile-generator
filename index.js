const inquirer = require('inquirer')
const fs = require('fs')


class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id= id;
        this.email = email;
        this.role = role;
    }
    getName(){} //inquirer.promt({})
    getId(){}
    getEmail(){}
    getRole(){return 'Employee'}
}

class Manager extends Employee {
    constructor(officeNum, role) {
        this.officeNum = officeNum;
        this.role = 'Manager';

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