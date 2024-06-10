DROP DATABASE IF EXISTS orm_db;
CREATE DATABASE IF NOT EXISTS orm_db;

USE orm_db;

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES category(id)
);

CREATE TABLE tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE ProductTags (
    productId INT,
    tagId INT,
    PRIMARY KEY (productId, tagId),
    FOREIGN KEY (productId) REFERENCES product(id),
    FOREIGN KEY (tagId) REFERENCES tag(id)
);
