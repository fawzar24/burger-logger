USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN default false,
    PRIMARY KEY(id)
);

