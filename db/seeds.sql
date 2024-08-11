-- COPY OF DB IN CASE THE DATA GETS ERASED
-- INSERT INTO department (id, name)
-- VALUES (1, 'department 1'),
--        (2, 'department 2'),
--        (3, 'department 3'),
--        (4, 'department 4');

-- INSERT INTO role (id, title, salary, department_id)
-- VALUES (1, 'role 1', 100000, 1),
--        (2, 'role 2', 200000, 2),
--        (3, 'role 3', 300000, 3),
--        (4, 'role 4', 400000, 4);

       
-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
-- VALUES  (1, 'employee 1', 'last name 1', 1, 1),
--         (2, 'employee 2', 'last name 2', 2, 1),      
--         (3, 'employee 3', 'last name 3', 3, 2),
--         (4, 'employee 4', 'last name 4', 4, 3),
--         (5, 'employee 6', 'last name 6', 2, 5),
--         (6, 'employee 5', 'last name 5', 1, 4),       
--         (7, 'employee 7', 'last name 7', 1, 6),
--         (8, 'employee 8', 'last name 8', 2, 7),     
--         (9, 'employee 9', 'last name 9', 3, 8),
--         (10, 'employee 10', 'last name 10', 4, 9);

INSERT INTO department (name)
VALUES ('department 1'),
       ('department 2'),
       ('department 3'),
       ('department 4');

INSERT INTO role (title, salary, department_id)
VALUES ('role 1', 100000, 1),
       ('role 2', 200000, 2),
       ('role 3', 300000, 3),
       ('role 4', 400000, 4);

       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('employee 1', 'last name 1', 1, 1),
        ('employee 2', 'last name 2', 2, 1),      
        ('employee 3', 'last name 3', 3, 2),
        ('employee 4', 'last name 4', 4, 3),
        ('employee 6', 'last name 6', 2, 5),
        ('employee 5', 'last name 5', 1, 4),       
        ('employee 7', 'last name 7', 1, 6),
        ('employee 8', 'last name 8', 2, 7),     
        ('employee 9', 'last name 9', 3, null),
        ('employee 10', 'last name 10', 4, null);

-- SELECT department.name, role.title, role.salary, role.department_id, employee.first_name, employee.last_name, employee.manager_id
-- FROM department
-- JOIN role ON department.id = role.department_id
-- JOIN employee ON role.id = employee.role_id;
