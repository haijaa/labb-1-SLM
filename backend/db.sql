1. psql --username=postgres
2. lösenord

3.  \d - se saker (display)
    \c - byta databas (connect)
    \l - lista saker (list)
    \q - stänga av (quit)

/* CREATE DATABASE comic_slm;
DROP DATABASE comic_slm; */

CREATE TABLE publisher (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL
);

CREATE TABLE magazines (
    id serial PRIMARY KEY,
    title VARCHAR(250) UNIQUE NOT NULL,
    description text NOT NULL,
    image VARCHAR(300) NOT NULL,
    character text NOT NULL,
    publisherid INTEGER NOT NULL,
    FOREIGN KEY (publisherid) REFERENCES publisher(id)
);

INSERT INTO publisher (name) VALUES ('Marvel');
INSERT INTO publisher (name) VALUES ('DC');

INSERT INTO magazines (title, description, image, character, publisherid) VALUES ('Wolverine Limited Series #1', 'First solo comic book series; First cameo of Yukio; First appearance of Shingen Harada', 'https://upload.wikimedia.org/wikipedia/en/6/6d/Wolverine_%28vol._1%29_1.jpg', 'Wolverine', 1);
INSERT INTO magazines (title, description, image, character, publisherid) VALUES ('Batman Vol 1', 'The Legend of the Batman - Who He is, and How he Came to Be', 'https://upload.wikimedia.org/wikipedia/en/4/4d/BatmanComicIssue1%2C1940.png', 'Batman', 2);

INSERT INTO magazines (tj, fräs, hej hå) VALUES (?, ?, ?, ?)