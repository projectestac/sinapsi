-- Posts by tag. 

CREATE DEFINER=CURRENT_USER
VIEW `posts_by_tag` AS
    SELECT
        `posts`.*,
        `post_tag`.`tag_id`
    FROM `posts` INNER JOIN `post_tag` ON
        `post_tag`.`post_id` = `posts`.`id`;
