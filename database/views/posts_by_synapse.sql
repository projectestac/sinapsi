-- Posts by synapse

CREATE DEFINER=CURRENT_USER
VIEW `posts_by_synapse` AS
    SELECT
        `posts`.*,
        `post_synapse`.`synapse_id`,
        `post_synapse`.`sticked`
    FROM `posts` INNER JOIN `post_synapse` ON
        `post_synapse`.`post_id` = `posts`.`id`;
