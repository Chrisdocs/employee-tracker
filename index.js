const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql');
const departmentsConnect = require('./routes/departments.js');
const rolesConnect = require('./routes/roles.js');
const employeesConnect = require('./routes/employees.js');
const { findSourceMap } = require('module');
// const figlet = require('figlet');

// const font = () => {figlet('Employee Tracker', function(err, data) {
//     if (err) {
//         console.log('Something with figlet went wrong.');
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
// };
// font()


const promptUser = ()  => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'mainSelect',
            message: 'Please Choose what you would like to do:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', new inquirer.Separator(), 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employees Role', new inquirer.Separator()]
        }
    ])
}
promptUser()
//get the user selection
.then(userSelection => {
    
    console.log(userSelection);

    console.log('This returns "userSelection.mainSelect": ' + userSelection.mainSelect);

    console.log('This returns "userSelection[mainSelect]": ' + userSelection['mainSelect']);

    var selection = userSelection['mainSelect'];
    console.log(selection);

    if (selection === 'View All Departments') {
        console.log('You Selected view all dept');
        //return sql database table for departments
        return departmentsConnect();
    } else if (selection === 'View All Roles') {
        console.log('You selected view all roles');
        return rolesConnect();
    } else if (selection === 'View All Employees') {
        console.log('You selected view all employees');
        return employeesConnect();
    } else if (selection === 'Add A Department') {
        console.log('You selected add a dept')
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'newDept',
                message: 'What would you like to call the new department?'
            }
        ])
    } else if (selection === 'Add A Role') {
        console.log('You selected Add A Role')
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'newRole',
                message: 'What would you like to call the new Role?'
            }
        ])
    } else if (selection === 'Add An Employee') {
        console.log('You selected Add An Employee')
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the new employees first name?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the new employees last name?'
            },
            {
                type: 'list',
                name: 'role',
                choices: [new inquirer.Separator('--- Sales ---'), 'SalesLead', 'Salesperson',new inquirer.Separator('--- Legal ---'), 'Lawyer', 'LawyerIntern',new inquirer.Separator('--- Engineering ---'), 'JuniorEngineer', 'SeniorEngineer', 'HeadEngineer',new inquirer.Separator('--- Finance ---'), 'Accountant', 'AccountsManager']
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Who will be the new employees manager?',
                choices: ['choice one', 'choice two']
            }
        ])

    } else if (selection === 'Update An Employees Role') {
        console.log('You selected Update An Employees Role')
    } else {
        console.log('You did not select a valid option.')
    }

});
//retireve relative data from sql server