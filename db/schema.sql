CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(300) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY (id)
);
