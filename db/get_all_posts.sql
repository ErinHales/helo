SELECT p.id, p.userid, p.title, p.image, p.post, p.author, h.username, h.picture FROM Posts p
JOIN HeloUsers h
ON p.userid = h.id;