INSERT INTO department (dept_name)
VALUES ("services"),
       ("hospitality"),
       ("kitchen"),
       ("font of house"),
       ("management");


INSERT INTO roles (role_name, salary,dept_id)
VALUES 
       ("Book keeper", 35000, 1),
       ("server", 26000, 2),
       ("cook", 23000, 3),
       ("general manager", 56000, 5),
       ("host", 25000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
       ("Anna", "Cormier", 5, NULL),
       ("Hanna", "Braneff", 2, 5),
       ("Michael", "Davidson", 3, 5),
       ("Marcie", "Lou", 1, 5),
       ("Spencer", "Lee", 4, 5);