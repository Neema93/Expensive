CREATE DATABASE expensify;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(255)  NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE expenses (
        id SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        amount VARCHAR(255) NOT NULL,
        createdAt  TIMESTAMP NOT NULL DEFAULT NOW(),
        user_id int, 
        FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (user_username, user_password)
VALUES ('Neema','123');
INSERT INTO users (user_username, user_password)
VALUES ('Meet','123');
INSERT INTO expenses (description, amount,user_id)
VALUES ('Rent','1600',1);
INSERT INTO expenses (description, amount,user_id)
VALUES ('Gas','100',1);
INSERT INTO expenses (description, amount,user_id)
VALUES ('utility','100',2);