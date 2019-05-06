-- SELECT *
-- FROM user_login
-- WHERE email = ${email};


SELECT ul.email, password, firstname, lastname
FROM user_login ul
JOIN users u
ON ul.email = u.email
WHERE u.email = ${email};