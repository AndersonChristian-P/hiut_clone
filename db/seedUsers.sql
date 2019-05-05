CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(75)
);

-- password is not included in users table - we capture hash via bcryptjs

CREATE TABLE user_login (
  login_id SERIAL PRIMARY KEY,
  email VARCHAR(75),
  password TEXT
);

CREATE TABLE addresses (
  address_id SERIAL PRIMARY KEY,
  street VARCHAR(150),
  city VARCHAR(50),
  state VARCHAR(2),
  user_id INTEGER references users()
);