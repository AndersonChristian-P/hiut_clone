INSERT INTO addresses (street, city, state, zip, user_id)
VALUES (
  ${street},
  ${city},
  ${state},
  ${zip},
  ${id}
) returning address_id;