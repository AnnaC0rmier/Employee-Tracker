

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
 ("anna", "cormier", 5, NULL),
 ("hanna", "braneff", 1, 1),
 ("michael", "davidson", 3, 1),
 ("spencer", "lee", 2, 1),
 ("marcie", "lou", 4, 1)