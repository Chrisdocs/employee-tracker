const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
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
            choices: [
                'View All Departments', 
                'View All Roles', 
                'View All Employees', 
                new inquirer.Separator(), 
                'Add A Department', 
                'Add A Role', 
                'Add An Employee', 
                'Update An Employees Role', 
                new inquirer.Separator()
            ]
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
        departmentsConnect();
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
        db.query("SELECT * FROM employee", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
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
                    choices: result.map(emp => `${emp['first_name']} ${emp['last_name']} ${emp['manager_id']}`)
                }
            ])
        });

    } else if (selection === 'Update An Employees Role') {
        console.log('You selected Update An Employees Role')
    } else {
        console.log('You did not select a valid option.')
    }

});
// Get Departments
const departmentsConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT employee.first_name, employee.last_name, department.dept_name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", function (err, res) {
        if (err) throw err;
        console.log(res);
        console.table(res);
        });
    });
};
//Get Employees
const employeesConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", function (err, res) {
        if (err) throw err;
        console.log(res);
        console.table(res)
    });
});
};
//Get Roles
const rolesConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", function (err, res) {
        if (err) throw err;
        console.log(res);
        console.table(res);
    });
});
};

//retireve relative data from sql server