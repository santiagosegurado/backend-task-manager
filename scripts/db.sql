CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS task (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

INSERT INTO task (title, description) VALUES 
                                    ('Task 1', 'Description 1'),
                                    ('Task 2', 'Description 2');