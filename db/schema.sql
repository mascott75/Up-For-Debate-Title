CREATE TABLE natures(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	increase varchar(100) NOT NULL,
    decrease varchar(100) not null, 
	PRIMARY KEY (id)
);

CREATE TABLE StreetWarsMon
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	natureID INTEGER(10) NOT NULL,
    hp INTEGER(3) NOT NULL,
    attack INTEGER(3) NOT NULL, 
    defense INTEGER(3) NOT NULL,
    speed INTEGER(3) NOT NULL,
    sp_defense INTEGER(3) NOT NULL,
    sp_attack INTEGER(3) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO streetwarsmon(name, natureID, hp, attack, defense, speed, sp_defense, sp_attack) VALUES("Ron Burgandy", "5", "142", "129", "120", "97", "102", "129")

insert into natures(name, increase, decrease) values ("Brave", "Attack", "Speed")