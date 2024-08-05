const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "rootroot",
  host: "localhost",
  database: "movie_db",
  port: 5432,
});

class DB {
  constructor() {}
  poolConnect = pool.connect();
  
  updateEmployeeManagers() {
    // update employee managers
  }

  viewEmployeesByManagers() {
    // view employees by managers
  }

  viewEmployeesByDepartment() {
    // view employees by department
  }

  deleteDepartmentRolesAndEmployees() {
    // delete department roles and employees
  }

  combinedSalariesOfAllEmployeesInThatDepartment() {
    // combined salaries of all employees in that department
  }
}
