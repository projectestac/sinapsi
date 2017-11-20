-- Increment the post's comment count when a comment is added

DELIMITER ;;
CREATE TRIGGER `synapse`.`comments_after_insert` AFTER INSERT
ON `comments` FOR EACH ROW
BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count + 1
    WHERE posts.id = new.post_id LIMIT 1;
END ;;
DELIMITER ;

-- Decrement the post's comment count when a comment is removed

DELIMITER ;;
CREATE TRIGGER `synapse`.`comments_after_delete` AFTER DELETE
ON `comments` FOR EACH ROW
BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count - 1
    WHERE posts.id = old.post_id LIMIT 1;
END ;;
DELIMITER ;
