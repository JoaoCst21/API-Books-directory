DROP
    DATABASE IF EXISTS heroku_9a3b3cb0ffdbe76;
CREATE
    DATABASE heroku_9a3b3cb0ffdbe76;

USE
    heroku_9a3b3cb0ffdbe76;

CREATE TABLE `User`
(
    `idUser`   INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name`     VARCHAR(50),
    `lastName` VARCHAR(50),
    `email`    VARCHAR(50),
    `password` VARCHAR(50)
);

CREATE TABLE `Book`
(
    `idBook`      INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `title`       VARCHAR(50),
    `author`      VARCHAR(50),
    `pages`       INT,
    `releaseDate` DATE,
    `description` VARCHAR(2000)
);

CREATE TABLE `BookMarkedBooks`
(
    `idBookMarkedBooks` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `iduser`            INT                NOT NULL,
    `idbook`            INT                NOT NULL
);

ALTER TABLE `BookMarkedBooks`
    ADD FOREIGN KEY (`iduser`) REFERENCES `User` (`idUser`);

ALTER TABLE `BookMarkedBooks`
    ADD FOREIGN KEY (`idbook`) REFERENCES `Book` (`idBook`);
