SELECT street, city, state, zip, firstname, lastname
FROM addresses a
JOIN users u
ON a.user_id = u.user_id
WHERE u.user_id = ${id};