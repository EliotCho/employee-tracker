const { prompt } = require("inquirer");
const db = require("./db");

init();

// options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function init() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          // show department names and department ids
          name: "View all departments",
          value: "view_all_departments",
        },
        {
          // show job title, role id, the department that role belongs to, and the salary for that role
          name: "View all roles",
          value: "view_all_roles",
        },
        {
          // show employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
          name: "View all employees",
          value: "view_all_employees",
        },
        {
          // show prompt to enter the name of the department
          // then the department is added to the database
          name: "Add a department",
          value: "add_a_department",
        },
        {
          // show prompt to enter the name, salary, and department for the role
          // then the role is added to the database
          name: "Add a role",
          value: "add_a_role",
        },
        {
          // show prompt to enter the employee’s first name, last name, role, and manager
          // then the employee is added to the database
          name: "Add an employee",
          value: "add_an_employee",
        },
        {
          // show prompt to select an employee to update and their new role
          // then the information is updated in the database
          name: "Update an employee role",
          value: "update_an_employee_role",
        },
        // {
        //   name: "Update employee managers",
        //   value: "update_employee_managers",
        // },
        // {
        //   name: "View employees by managers",
        //   value: "view_employees_by_managers",
        // },
        // {
        //   name: "View employees by department",
        //   value: "view_employees_by_department",
        // },
        // {
        //   name: "Delete department, roles, and employees",
        //   value: "delete_department_roles_and_employees",
        // },
        // {
        //   name: "View the total utilized budget of a department (combined salaries of all employees in that department)",
        //   value: "combined_salaries_of_all_employees_in_that_department",
        // },
        {
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "view_all_departments":
        view_all_departments();
        break;
      case "view_all_roles":
        view_all_roles();
        break;
      case "view_all_employees":
        view_all_employees();
        break;
      case "add_a_department":
        add_a_department();
        break;
      case "add_a_role":
        add_a_role();
        break;
      case "add_an_employee":
        add_an_employee();
        break;
      case "update_an_employee_role":
        update_an_employee_role();
        break;
      ///////////////////////////////////////////////////////////////////////////////
      // work on later
      // case "update_employee_managers":
      //   update_employee_managers();
      //   break;
      // case "view_employees_by_managers":
      //   view_employees_by_managers();
      //   break;
      // case "view_employees_by_department":
      //   view_employees_by_department();
      //   break;
      // case "delete_department_roles_and_employees":
      //   delete_department_roles_and_employees();
      //   break;
      // case "combined_salaries_of_all_employees_in_that_department":
      //   combined_salaries_of_all_employees_in_that_department();
      //   break;
      default:
        break;
    }
  });
}

function view_all_departments() {
  db.viewAllDepartments()
    .then(({ rows }) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => init());
}

function view_all_roles() {
  db.viewAllRoles()
    .then(({ rows }) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => init());
}

function view_all_employees() {
  db.viewAllEmployees()
    .then(({ rows }) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => init());
}

function add_a_department() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((res) => {
    let departmentName = res.name;
    db.addDepartment(departmentName)
      .then(() => console.log(`Added ${departmentName} to the database`))
      .then(() => init());
  });
}

function add_a_role() {
  db.viewAllDepartments().then(({ rows }) => {
    let departments = rows.map(({ id, name }) => ({ name, value: id }));
    prompt([
      {
        name: "title",
        message: "What is the title of the role?",
      },
      {
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "What is the department id of the role?",
        choices: departments,
      },
    ]).then((res) => {
      db.addRole(res.title, res.salary, res.department_id)
        .then(() =>
          console.log(
            `Added ${res.title}, ${res.salary}, ${res.department_id} to the database`
          )
        )
        .then(() => init());
    });
  });
}

function add_an_employee() {
  prompt([
    {
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    // {
    //   name: "role_id",
    //   message: "What is the role id of the employee?",
    // },
    // {
    //   name: "manager_id",
    //   message: "What is the manager id of the employee?",
    // },
  ]).then((res) => {
    let first_name = res.first_name;
    let last_name = res.last_name;

    db.viewAllRoles().then(({ rows }) => {
      let roles = rows.map(({ id, title }) => ({
        name: title,
        value: id,
      }));

      prompt({
        type: "list",
        name: "role_id",
        message: "What is the role id of the employee?",
        choices: roles,
      }).then((res) => {
        let role_id = res.role_id;

        db.viewAllEmployees().then(({ rows }) => {
          let managers = rows.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id,
          }));

          managers.unshift({ name: "None", value: null });

          prompt({
            type: "list",
            name: "manager_id",
            message: "Who is the manager of the employee?",
            choices: managers,
          })
            .then((res) => {
              let manager_id = res.manager_id;
              db.addEmployee(first_name, last_name, role_id, manager_id);
            })
            .then(() =>
              console.log(`Added ${first_name} ${last_name} to the database`)
            )
            .then(() => init());
        });
      });
    });
  });
}

function update_an_employee_role() {
  db.viewAllEmployees().then(({ rows }) => {
    let employees = rows.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    prompt([
      {
        type: "list",
        name: "id",
        message: "Which employee's role do you want to update?",
        choices: employees,
      },
    ]).then((res) => {
      let employee_id = res.id;
      db.viewAllRoles(res).then(({ row }) => {
        let roles = rows.map(({ id, title }) => ({
          name: title,
          value: id,
        }));
        prompt([
          {
            type: "list",
            name: "role_id",
            message: "What is the new role id of the employee?",
            choices: roles,
          },
        ])
          .then((res) => db.updateEmployeeRole(employee_id, res.role_id))
          .then(() =>
            console.log(`Added ${employee_id}, ${res.role_id} to the database`)
          )
          .then(() => init());
      });
    });
  });
}

// function update_employee_managers() {
//   db.function()
//     .then(({ rows }) => {
//       let variable1 = rows;
//     })
//     .then(() => init());
// }

// function view_employees_by_managers() {
//   db.function()
//     .then(({ rows }) => {
//       let variable1 = rows;
//     })
//     .then(() => init());
// }

// function view_employees_by_department() {
//   db.function()
//     .then(({ rows }) => {
//       let variable1 = rows;
//     })
//     .then(() => init());
// }

// function delete_department_roles_and_employees() {
//   db.function()
//     .then(({ rows }) => {
//       let variable1 = rows;
//     })
//     .then(() => init());
// }

// function combined_salaries_of_all_employees_in_that_department() {
//   db.function()
//     .then(({ rows }) => {
//       let variable1 = rows;
//     })
//     .then(() => init());
// }
