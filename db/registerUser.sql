INSERT INTO user_login (email, password)
VALUES (
  ${email},
  ${hash}
) returning email, password;

INSERT INTO users (firstname, lastname, email)
VALUES (
  ${firstname},
  ${lastname},
  ${email}
) returning user_id;