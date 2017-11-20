-- Increment the tag's posts count when a tag is added to a post

DELIMITER ;;
CREATE TRIGGER `synapse`.`post_tag_after_insert` AFTER INSERT
ON `post_tag` FOR EACH ROW
BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count + 1
    WHERE tags.id = new.tag_id LIMIT 1;
END ;;
DELIMITER ;

-- Decrement the tag's posts count when a tag is removed from a post

DELIMITER ;;
CREATE TRIGGER `synapse`.`post_tag_after_delete` AFTER DELETE
ON `post_tag` FOR EACH ROW
BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count - 1
    WHERE tags.id = old.tag_id LIMIT 1;
END ;;
DELIMITER ;
