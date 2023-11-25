# Getting Started with API

To start the project you will need to install [Node.js](https://nodejs.org/en).

## Available Scripts

In the project directory, you can run:

### `npm install eslint`
### `npm install nodemon`
### `npm install dotenv`
### `npm install express`
### `npm install mysql2`
### `npm install cors`

These are all the dependences you will need to excecute the API application.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to make a request.


## Connecting to DataBase

In the backend folder, you will need to create a .env file, following the .env.example

``` bash
PORT=3333
MYSQL_HOST=your_host
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DB=your_database
```

## Creating a DataBase

To run the application, you need to have working sql database, then you can run this query:

```bash
CREATE DATABASE yout_db;
USE your_db;

CREATE TABLE clientes (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100),
    telefone varchar(20),
    cep varchar(15),
    mensalidade float,
    PRIMARY KEY (id)
);

CREATE TABLE admin (
    id int NOT NULL AUTO_INCREMENT,
    login varchar(45),
    senha varchar(200),
    PRIMARY KEY (id)
);

INSERT INTO admin (login, senha) VALUES ('admin', 'e76824a5b39fdb835f77e34ae044a26f9038f6b03e59353a673a778b519963ad5b4ed471be92d8c7580e76ec88dc0f672dac494ceeb718c4ea8f04fdfb280d6e');

CREATE USER your_user@localhost IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON your_db.* TO your_user@localhost;
FLUSH PRIVILEGES;
```

You can insert other admins using the encoding system at "./backend/src/control/loginContol.js".
