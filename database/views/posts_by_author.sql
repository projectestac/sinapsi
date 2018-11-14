-- Posts by author

CREATE DEFINER=CURRENT_USER
VIEW `posts_by_author` AS
    SELECT
        `posts`.*,
        `authors`.`municipality_id`,
        `authors`.`territory_id`,
        `authors`.`project_id`,
        `authors`.`school_id`
    FROM `posts` INNER JOIN `authors` ON
        `posts`.`author_id` = `authors`.`id`;