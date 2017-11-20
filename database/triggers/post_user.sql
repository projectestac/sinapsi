-- Increment the post's likes and favourite counts

DELIMITER ;;
CREATE TRIGGER `synapse`.`post_user_after_insert` AFTER INSERT
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + new.liked,
        posts.favourite_count = posts.favourite_count + new.favourited
	WHERE posts.id = new.post_id LIMIT 1;
END ;;
DELIMITER ;

-- Update the post's likes and favourite counts

DELIMITER ;;
CREATE TRIGGER `synapse`.`post_user_after_update` AFTER UPDATE
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + (new.liked - old.liked),
        posts.favourite_count = posts.favourite_count + (new.favourited - old.favourited)
	WHERE posts.id = new.post_id LIMIT 1;
END ;;
DELIMITER ;

-- Decrement the post's likes and favourite counts

DELIMITER ;;
CREATE TRIGGER `synapse`.`post_user_after_delete` AFTER DELETE
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count - old.liked,
        posts.favourite_count = posts.favourite_count - old.favourited
	WHERE posts.id = old.post_id LIMIT 1;
END ;;
DELIMITER ;
