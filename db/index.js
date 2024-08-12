const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "rootroot",
  host: "localhost",
  database: "employee_db",
  port: 5432,
});

class DB {
  constructor() {}
  async query(sql, args = []) {
    const poolConnect = await pool.connect();
    try {
      const result = await poolConnect.query(sql, args);
      return result;
    } finally {
      poolConnect.release();
    }
  }

  viewAllDepartments() {
    // view all departments
    return this.query("SELECT * FROM department");
  }

  viewAllRoles() {
    // view all roles
    return this.query("SELECT * FROM role");
  }

  viewAllEmployees() {
    // view all employees
    return this.query("SELECT * FROM employee");
  }

  addDepartment(departmentName) {
    // add a department
    return this.query("INSERT INTO department (name) VALUES ($1)", [
      departmentName,
    ]);
  }

  addRole(title, salary, department_id) {
    // add a role
    return this.query(
      "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
      [title, salary, department_id]
    );
  }

  addEmployee(first_name, last_name, role_id, manager_id) {
    // add an employee
    return this.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, role_id, manager_id]
    );
  }

  updateEmployeeRole(employee_id, role_id) {
    // update an employee role
    return this.query("UPDATE employee SET manager_id = $1 WHERE id = $2", [
      role_id,
      employee_id,
    ]);
  }

  // updateEmployeeManagers() {
  //   // update employee managers
  // }

  // viewEmployeesByManagers() {
  //   // view employees by managers
  // }

  // viewEmployeesByDepartment() {
  //   // view employees by department
  // }

  // deleteDepartmentRolesAndEmployees() {
  //   // delete department roles and employees
  // }

  // combinedSalariesOfAllEmployeesInThatDepartment() {
  //   // combined salaries of all employees in that department
  // }
}

module.exports = new DB();
