SELECT Posts.title, Posts.author, Posts.post, HeloUsers.image, HeloUsers.username FROM Posts
JOIN HeloUsers ON Posts.userid = HeloUsers.id
WHERE id = $1;