
-- USERS --
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(75)
);

INSERT INTO users (firstname, lastname, email)
VALUES (
  'Christian',
  'Anderson',
  'ca@seemail.com'
);

-- password is not included in users table - we capture hash via bcryptjs


-- USER LOGIN --

CREATE TABLE user_login (
  login_id SERIAL PRIMARY KEY,
  email VARCHAR(75),
  password TEXT
);

INSERT INTO user_login (email, password)
VALUES (
  'ca@seemail.com',
  'password'
);


-- ADDRESSES --
CREATE TABLE addresses (
  address_id SERIAL PRIMARY KEY,
  street VARCHAR(150),
  city VARCHAR(50),
  state VARCHAR(2),
  zip INTEGER,
  user_id INTEGER references users
);

INSERT INTO addresses (street, city, state, zip, user_id)
VALUES (
  '123 Elm',
  'Lehi',
  'UT',
  22222,
  1
), (
  '567 Cutty',
  'Felton',
  'PA',
  33333,
  1
);