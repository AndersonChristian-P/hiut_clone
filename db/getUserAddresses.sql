-- SELECT street, city, state
-- FROM addresses

-- need to confirm that the tie in from what is coming from the client side is correct
SELECT street, city, state, zip, firstname, lastname
FROM addresses a
JOIN users u
ON a.user_id = u.user_id
WHERE u.user_id = ${id};