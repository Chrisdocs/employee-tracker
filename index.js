const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'mainSelect',
            message: 'Please Choose what you would like to do:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', new inquirer.Separator(), 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employees Role', new inquirer.Separator()]
        },
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
    } else if (selection === 'View All Roles') {
        console.log('You selected view all roles');
    } else if (selection === 'View All Employees') {
        console.log('You selected view all employees');
    } else if (selection === 'Add A Department') {
        console.log('You selected add a dept')
    } else if (selection === 'Add A Role') {
        console.log('You selected Add A Role')
    } else if (selection === 'Add An Employee') {
        console.log('You selected Add An Employee')
    } else if (selection === 'Update An Employees Role') {
        console.log('You selected Update An Employees Role')
    } else {
        console.log('You did not select a valid option.')
    }

})
//retireve relative data from sql server