const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alc12096!',
  database: 'workplace_db'
}, console.log(`Connected to the workplace_db database.`));

const initialPrompt = [
    {
        type: 'list',
        name: 'initialPrompt',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add a role', 'add an employee', 'update an employee', 'exit']
    }
];

const addDeptPrompt = [
    {
        type: 'input',
        name: 'dept_name',
        message: 'What is the department name you want to add'
    }
];

const addRolePrompt = [
    {
        type: 'input',
        name: 'role_name',
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
        name: 'first_name',
        message: 'What is the employee\'s First name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employee\'s Last name?'
    },
    {
        type: 'input',
        name: 'role_name',
        message: 'What is the employee\'s role?'
    },
    {
        type: 'input',
        name: 'manager_name',
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

async function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
        }
    });
}

async function viewAllRoles() {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
        }
    });
}

async function viewAllEmployees() {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
        }
    });
}

async function addDepartment() {
    const dept = await inquirer.prompt(addDeptPrompt);
    db.query('INSERT INTO department (dept_name) VALUES (?)', [dept.dept_name], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Department added successfully.', results);
        }
    });
}

async function addRole() {
    const role = await inquirer.prompt(addRolePrompt);
    db.query('INSERT INTO roles (role_name, salary, dept_id) VALUES (?, ?, ?)', [role.role_name, role.salary, role.dept_id], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Role added successfully.', results);
        }
    });
}

async function addEmployee() {
    const employee = await inquirer.prompt(addEmployeePrompt);
    
  
}

async function updateEmployee() {
    const updateEmployee = await inquirer.prompt(updateEmployeePrompt);
    
    
}

async function prompt() {
    while (true) {
        try {
            const answers = await inquirer.prompt(initialPrompt);

            switch (answers.initialPrompt) {
                case 'view all departments':
                    await viewAllDepartments();
                    break;

                case 'view all roles':
                    await viewAllRoles();
                    break;

                case 'view all employees':
                    await viewAllEmployees();
                    break;

                case 'add department':
                    await addDepartment();
                    break;

                case 'add a role':
                    await addRole();
                    break;

                case 'add an employee':
                    await addEmployee();
                    break;

                case 'update an employee':
                    await updateEmployee();
                    break;

                case 'exit':
                    console.log('Exiting the application.');
                    return; 

                default:
                    console.log('Invalid option');
                    break;
            }
        } catch (err) {
            console.error(err);
        }
    }
}

prompt();  


