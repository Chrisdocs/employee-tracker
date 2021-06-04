INSERT INTO department (id, dept_name)
VALUES
(1, 'Sales'),
(2, 'Legal'),
(3, 'Engineering'),
(4, 'Finance');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'SalesLead', 100000, 1),
(2, 'Salesperson', 60000, 1),
(3, 'Lawyer', 150000, 2),
(4, 'LawyerIntern', 50000, 2),
(5, 'JuniorEngineer', 70000, 3),
(6, 'SeniorEngineer', 100000, 3),
(7, 'HeadEngineer', 150000, 3),
(8, 'AccountsManager', 110000, 4),
(9, 'Accountant', 80000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Susan', 'Murphy', 4, NULL),
(2, 'Joann', 'Strauss', 4, 9),
(3, 'Carl', 'Peterson', 1, NULL),
(4, 'John', 'Clark', 2, 3),
(5, 'Carol', 'Swashbuckler', 2, 3);