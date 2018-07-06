INSERT INTO HeloUsers
(username, password, picture)
VALUES ($1, $2, 'https://robohash.org/kitten?set=set4')
RETURNING *;