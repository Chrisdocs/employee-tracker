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
    console.log(userSelection.mainSelect);
})
//retireve relative data from sql server