SELECT * FROM Posts
JOIN HeloUsers 
ON Posts.userid = HeloUsers.id
WHERE lower(title) LIKE $1 
    OR lower(post) LIKE $1;