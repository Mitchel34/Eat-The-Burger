CREATE burgers_db;
USE burgers_db;

CREATE TABLE burgers; 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN default 0,
PRIMARY KEY (id)
)