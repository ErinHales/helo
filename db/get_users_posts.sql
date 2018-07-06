SELECT * FROM Posts
JOIN HeloUsers
ON HeloUsers.id = $1 AND Posts.userid = $1;