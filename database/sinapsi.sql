SET UNIQUE_CHECKS = 0;
SET FOREIGN_KEY_CHECKS = 0;


-- Workaround for MySQL bug #81031 which causes it to return wrong
-- counts for InnoDB tables on versions < 5.6.37, 5.7.19, 8.0.2
SET GLOBAL optimizer_switch="index_merge_intersection=off";


-- === Create the database ====================================================

CREATE DATABASE sinapsi
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_spanish_ci;


-- === Create the tables ======================================================

USE sinapsi;

SOURCE tables/authors.sql;
SOURCE tables/blocks.sql;
SOURCE tables/comments.sql;
SOURCE tables/failed_jobs.sql;
SOURCE tables/feeds.sql;
SOURCE tables/jobs.sql;
SOURCE tables/migrations.sql;
SOURCE tables/municipalities.sql;
SOURCE tables/password_resets.sql;
SOURCE tables/posts.sql;
SOURCE tables/post_synapse.sql;
SOURCE tables/post_tag.sql;
SOURCE tables/post_user.sql;
SOURCE tables/projects.sql;
SOURCE tables/schools.sql;
SOURCE tables/sessions.sql;
SOURCE tables/synapses.sql;
SOURCE tables/synapse_user.sql;
SOURCE tables/tags.sql;
SOURCE tables/territories.sql;
SOURCE tables/users.sql;


-- === Load seed data =========================================================

LOAD DATA LOCAL INFILE 'seeds/authors.txt' INTO TABLE authors;
LOAD DATA LOCAL INFILE 'seeds/synapse_user.txt' INTO TABLE synapse_user;
LOAD DATA LOCAL INFILE 'seeds/synapses.txt' INTO TABLE synapses;
LOAD DATA LOCAL INFILE 'seeds/users.txt' INTO TABLE users;


-- === Create views ===========================================================

SOURCE views/posts_by_author.sql;
SOURCE views/posts_by_synapse.sql;
SOURCE views/posts_by_tag.sql;
SOURCE views/posts_by_user.sql;
SOURCE views/synapses_by_user.sql;


-- === Create triggers ========================================================

SOURCE triggers/comments.sql
SOURCE triggers/post_tag.sql
SOURCE triggers/post_user.sql


SET UNIQUE_CHECKS = 1;
SET FOREIGN_KEY_CHECKS = 1;
