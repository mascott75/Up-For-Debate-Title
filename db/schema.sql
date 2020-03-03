CREATE TABLE natures(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	increase varchar(100) NOT NULL,
    decrease varchar(100) not null, 
	PRIMARY KEY (id)
);
CREATE TABLE pokemon
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(30) NOT NULL,
	natureID INTEGER(10) NULL,
	-- stats start below
    hp INTEGER(3) NOT NULL,
    attack INTEGER(3) NOT NULL, 
    defense INTEGER(3) NOT NULL,
    speed INTEGER(3) NOT NULL,
	-- stats end
	PRIMARY KEY (id)
);
CREATE TABLE generated_pokemon
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(30) NOT NULL,
	natureID INTEGER(10) NULL,
    hp INTEGER(3) NOT NULL,
    attack INTEGER(3) NOT NULL, 
    defense INTEGER(3) NOT NULL,
    speed INTEGER(3) NOT NULL,
	PRIMARY KEY (id)
);