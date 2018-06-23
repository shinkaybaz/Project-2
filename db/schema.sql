DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE doTable (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	Category VARCHAR(40) NOT NULL,
	Activity VARCHAR(40) NOT NULL,
    Price INTEGER(10) NOT NULL,
    Description VARCHAR(500) NOT NULL,
	Rating INTEGER(10) NOT NULL,
	primary key (item_id)
);

CREATE TABLE userInfo (
	user_id INTEGER AUTO_INCREMENT NOT NULL,
	Email VARCHAR(40) NOT NULL,
	Password VARCHAR(40) NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
	primary key (item_id)
);

DROP DATABASE IF EXISTS budget;
CREATE DATABASE budget;
USE budget;

CREATE TABLE budgetinfo (
	user_id INTERGER AUTO_INCREMENT NOT NULL,
	description VARCHAR(500) NOT NULL,
	cost INTEGER(10) NOT NULL,
	primary key (item_id)

