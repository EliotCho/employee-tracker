INSERT INTO departments (name)
VALUES ('department 1'),
       ('department 2'),
       ('department 3'),
       ('department 4');

INSERT INTO role (title, salary, department_id)
VALUES ('role 1', 100000, 1),
       ('role 2', 200000, 2),
       ('role 22', 200000, 2),
       ('role 3', 300000, 3),
       ('role 33', 300000, 3),
       ('role 333', 300000, 3),
       ('role 4', 400000, 4),
       ('role 44', 400000, 4),
       ('role 444', 400000, 4),
       ('role 4444', 400000, 4);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('employee 1', 'last name 1', 1, NULL),
('employee 2', 'last name 2', 2, 1),
('employee 22', 'last name 22', 2, 1),
('employee 3', 'last name 3', 3, 2),
('employee 4', 'last name 4', 4, 3),
('employee 5', 'last name 5', 5, 4),
('employee 55', 'last name 55', 5, 4),
('employee 555', 'last name 555', 5, 4),
('employee 6', 'last name 6', 6, 5),
('employee 7', 'last name 7', 7, 6),
('employee 8', 'last name 8', 8, 7),
('employee 88', 'last name 88', 8, 7),
('employee 888', 'last name 888', 8, 7),
('employee 8888', 'last name 8888', 8, 7),
('employee 88888', 'last name 88888', 8, 7),
('employee 9', 'last name 9', 9, 8),
('employee 10', 'last name 10', 10, 9);