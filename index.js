const inquirer = require("inquirer");
const db = require("./db");

init();

// update employee managers

// view employees by managers

// view employees by department

// delete department, roles, and employees

// view the total utilized budget of a department (combined salaries of all employees in that department)

function init() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "Update employee managers",
          value: "update_employee_managers",
        },
        {
          name: "View employees by managers",
          value: "view_employees_by_managers",
        },
        {
          name: "View employees by department",
          value: "view_employees_by_department",
        },
        {
          name: "Delete department, roles, and employees",
          value: "delete_department_roles_and_employees",
        },
        {
          name: "View the total utilized budget of a department (combined salaries of all employees in that department)",
          value: "combined_salaries_of_all_employees_in_that_department",
        },
        {
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]).then((res) => {
    let coice = res.choice;
    switch (choice) {
      case "update_employee_managers":
        update_employee_managers();
        break;
      case "view_employees_by_managers":
        view_employees_by_managers();
        break;
      case "view_employees_by_department":
        view_employees_by_department();
        break;
      case "delete_department_roles_and_employees":
        delete_department_roles_and_employees();
        break;
      case "combined_salaries_of_all_employees_in_that_department":
        combined_salaries_of_all_employees_in_that_department();
        break;
      default:
        break;
    }
  });
}

function update_employee_managers() {
  db.function()
    .then(({ rows }) => {
      let variable1 = rows;
    })
    .then(() => init());
}

function view_employees_by_managers() {
  db.function()
    .then(({ rows }) => {
      let variable1 = rows;
    })
    .then(() => init());
}

function view_employees_by_department() {
  db.function()
    .then(({ rows }) => {
      let variable1 = rows;
    })
    .then(() => init());
}

function delete_department_roles_and_employees() {
  db.function()
    .then(({ rows }) => {
      let variable1 = rows;
    })
    .then(() => init());
}

function combined_salaries_of_all_employees_in_that_department() {
  db.function()
    .then(({ rows }) => {
      let variable1 = rows;
    })
    .then(() => init());
}
