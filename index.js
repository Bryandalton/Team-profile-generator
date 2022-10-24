const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const employees = [];
const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Manager name: ' 
   },{
    type: 'input',
    name: 'id',
    message: 'Employee id: '
   },{
    type: 'input',
    name: 'email',
    message: 'Employee email: '
   },{
    type: 'input',
    name: 'officeNum',
    message: 'Office number: '
   }]

   const engineerQuestions = [{
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
    type: 'input',
    name: 'github',
    message: 'Github Username: '
   }]
// how to set up a recursve question structure, aka how to loop back through the questions with additional options per role


inquirer.promt(managerQuestions)
.then(({name, id, email, role}) => {
    let data = {
        name,
        id,
        email,
        role
    }

    employees.push(data)
})