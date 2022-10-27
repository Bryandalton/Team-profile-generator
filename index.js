const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const { resolve } = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');
let employees = [];
const basicPromt = [{
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
   }];

function managerPrompt() {
    const managerPrompt = [{
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

       inquirer.prompt(managerPrompt)
        .then(({name, id, email, officeNum}) => {
        let data = {
        name,
        id,
        email,
        officeNum
    }

        console.log(data)


    let manager = new Manager(name, id, email, officeNum)
    employees.push(manager)
    nextEmployee();
})
}
function nextEmployee () {
    const next = {
        type: 'confirm',
        name: 'next',
        message: 'Add employee?',
        default: false
    }

    inquirer.prompt(next)
    .then(response => {
        if (response.next) {
            role()
        } else {
            console.log(employees);
            generateHtml();
        }
})
};

function role() {
    const role = {
        type: 'list',
        name: 'role',
        message: 'Employee role: ',
        choices: ['Engineer', 'Intern', 'Employee']
    }
    inquirer.prompt(role)
    .then(({role}) => {
        console.log(role)
        if( role == 'Employee'){
            basicEmployee()
        } else if(role == 'Engineer'){
            engineer();
        } else {
            intern();
        }
    })

    
};
function basicEmployee(){
    inquirer.prompt(basicPromt)
    .then(({name, id, email}) => {
        const employee = new Employee(name, id, email)
        employees.push(employee)
        nextEmployee()
    })
};

function engineer(){
    const engineerPrompt = [{
        type: 'input',
        name: 'github',
        message: 'Github Username: '
    }];

    inquirer.prompt(basicPromt.concat(engineerPrompt))
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github)
        employees.push(engineer)
        nextEmployee()
    })
}
function intern(){
    const internPrompt = [{
        type: 'input',
        name: 'school',
        message: 'School or Institution: '
    }];

    inquirer.prompt(basicPromt.concat(internPrompt))
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school)
        employees.push(intern)
        nextEmployee()
    })
}
    function getExtra(employee){
        if (employee.getRole() == 'Manager'){
             return 'Office#: ' + employee.officeNum
        } else if (employee.getRole() == 'Engineer') {
            return 'Github username: ' + employee.github
        } else if (employee.getRole() == 'Intern') {
            return 'School: ' + employee.school
        } else {return ''}
    }
function addEmployee() {
    return employees.map((employee) => {
        const card = `
        <div class="card">
            <h3>${employee.name}</h3>
            <h3>${employee.getRole()}</h3>
            <p>ID: ${employee.id}</p>
            <a href="mailto:${employee.email}"><p>email: ${employee.email}</p></a>
            <p>${getExtra(employee)}</p>
        </div>
        `
        return card;
    })
    
}

function generateHtml () {
    let data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>My Team</header>
        <section class="grid">
            ${addEmployee().join('')}
        </section>
        <script src="./script.js"></script>
    </body>
    </html>`

    fs.writeFile('./public/index.html', data, (err) => {
    err? console.error(err) : console.log('Successfully created index.html')
})}

managerPrompt()

module.exports = {employees};