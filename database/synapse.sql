-- === Create the database ====================================================

CREATE DATABASE synapse;

ALTER DATABASE synapse
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;


-- === Create the tables ======================================================

USE synapse;

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

SOURCE views/posts_by_author.sql;
SOURCE views/posts_by_synapse.sql;
SOURCE views/posts_by_tag.sql;
SOURCE views/posts_by_user.sql;

SOURCE triggers/comments.sql
SOURCE triggers/post_tag.sql
SOURCE triggers/post_user.sql


-- === Database configuration =================================================

-- Workaround for MySQL bug #81031

SET GLOBAL optimizer_switch="index_merge_intersection=off";
