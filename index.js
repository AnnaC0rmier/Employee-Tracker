
// open the application and be prompted. ( using inquirer)
// view all depts, view all roles, view all employeees, add dept, add role, add employee,update employee role
// when view dept is chosen a table is shown with dept names and dept ids. ill do this by creating a schema and then doing  a get request in order to view the information.
// when view all roles is chosen a table with job title, role id, the dept it belongs to, and the salary for the role. this will be done once again by creating a table with schema and then using a GET request to view the info
// view all employees a table is shown with employee id, first and last, job title, dept, salaries, and managers the empoyee reports to. Also using a GET request
// add a dept - post request to add to dept table
// add an employee - post request to add to employee table
// update employee role get back selected employee modify info and then send it back to the table. USING GET/POST

const inquirer = require('inquirer');


const initialPrompt = [
    {
        type: 'list',
        name: 'initialPrompt',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add a role', 'add an employee', 'update an employee']
    }
];

const addDeptPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name you want to add'
    }
];

const addRolePrompt = [
    {
        type: 'input',
        name: 'role',
        message: 'What is the name of the role you want to add'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    },
    {
        type: 'input',
        name: 'deptAssociation',
        message: 'What is the department associated with this role?'
    }
];

const addEmployeePrompt = [
    {
        type: 'input',
        name: 'empFirstName',
        message: 'What is the employee\'s First name?'
    },
    {
        type: 'input',
        name: 'empLastName',
        message: 'What is the employee\'s Last name?'
    },
    {
        type: 'input',
        name: 'empRole',
        message: 'What is the employee\'s role?'
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Who is the employee\'s manager?'
    }
];

const updateEmployeePrompt = [
    {
        type: 'input',
        name: 'updateEmp',
        message: 'Which employee would you like to update?'
    },
    {
        type: 'input',
        name: 'newEmpRole',
        message: 'What is the employee\'s new role?'
    }
];

async function actionPrompt() {
    try {
        const answers = await inquirer.prompt(initialPrompt);

        if (answers.initialPrompt === 'add department') {
            await inquirer.prompt(addDeptPrompt);
        } else if (answers.initialPrompt === 'add a role') {
            await inquirer.prompt(addRolePrompt);
        } else if (answers.initialPrompt === 'add an employee') {
            await inquirer.prompt(addEmployeePrompt);
        } else if (answers.initialPrompt === 'update an employee') {
            await inquirer.prompt(updateEmployeePrompt);
        }
    } catch (error) {
        console.error('Error during prompts:', error);
    }
}

actionPrompt();

module.exports = index;

