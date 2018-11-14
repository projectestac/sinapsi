-- Posts by user

CREATE DEFINER=CURRENT_USER
VIEW `posts_by_user` AS
    SELECT
        `posts`.*,
        `post_user`.`user_id`,
        `post_user`.`liked`,
        `post_user`.`favourited`,
        `post_user`.`commented`
    FROM `posts` INNER JOIN `post_user` ON
        `post_user`.`post_id` = `posts`.`id`;
