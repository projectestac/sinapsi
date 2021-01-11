-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Temps de generació: 09-02-2021 a les 14:12:01
-- Versió del servidor: 5.7.33-0ubuntu0.18.04.1
-- Versió de PHP: 7.3.27-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `sinapsi`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `authors`
--

CREATE TABLE `authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(550) COLLATE utf8mb4_spanish_ci NOT NULL,
  `type` enum('projects','schools','users') COLLATE utf8mb4_spanish_ci NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `municipality_id` int(10) UNSIGNED DEFAULT NULL,
  `territory_id` int(10) UNSIGNED DEFAULT NULL,
  `project_id` int(10) UNSIGNED DEFAULT NULL,
  `school_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `synapse_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Bolcant dades de la taula `authors`
--

INSERT INTO `authors` (`id`, `name`, `type`, `category_id`, `municipality_id`, `territory_id`, `project_id`, `school_id`, `user_id`, `synapse_id`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'users', NULL, NULL, NULL, NULL, 1, 2, 2018, '2018-02-01 13:14:01', NULL);

-- --------------------------------------------------------

--
-- Estructura de la taula `blocks`
--

CREATE TABLE `blocks` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_spanish_ci,
  `options` text COLLATE utf8mb4_spanish_ci,
  `synapse_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `content` varchar(500) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Disparadors `comments`
--
DELIMITER $$
CREATE TRIGGER `comments_after_delete` AFTER DELETE ON `comments` FOR EACH ROW BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count - 1
    WHERE posts.id = old.post_id LIMIT 1;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `comments_after_insert` AFTER INSERT ON `comments` FOR EACH ROW BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count + 1
    WHERE posts.id = new.post_id LIMIT 1;
    
    INSERT INTO post_user (post_id, user_id, commented)
        VALUES (new.post_id, new.user_id, 1)
        ON DUPLICATE KEY UPDATE commented = 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de la taula `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` int(10) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `queue` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `feeds`
--

CREATE TABLE `feeds` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(512) CHARACTER SET ascii NOT NULL,
  `etag` text COLLATE utf8mb4_spanish_ci,
  `author_id` int(10) UNSIGNED NOT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `municipalities`
--

CREATE TABLE `municipalities` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(512) CHARACTER SET ascii NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `excerpt` varchar(1000) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_spanish_ci,
  `image_url` varchar(1024) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `like_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `favourite_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comment_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `reputation` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `md5_hash` varchar(32) COLLATE utf8mb4_spanish_ci NOT NULL,
  `guid` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `feed_id` int(10) UNSIGNED NOT NULL,
  `author_id` int(10) UNSIGNED NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de suport per a vistes `posts_by_author`
-- (Veure a sota per a la visualització actual)
--
CREATE TABLE `posts_by_author` (
`id` int(10) unsigned
,`url` varchar(512)
,`title` varchar(255)
,`excerpt` varchar(1000)
,`content` text
,`image_url` varchar(1024)
,`like_count` int(10) unsigned
,`favourite_count` int(10) unsigned
,`comment_count` int(10) unsigned
,`reputation` tinyint(3) unsigned
,`md5_hash` varchar(32)
,`guid` text
,`feed_id` int(10) unsigned
,`author_id` int(10) unsigned
,`published_at` timestamp
,`created_at` timestamp
,`updated_at` timestamp
,`deleted_at` timestamp
,`municipality_id` int(10) unsigned
,`territory_id` int(10) unsigned
,`project_id` int(10) unsigned
,`school_id` int(10) unsigned
);

-- --------------------------------------------------------

--
-- Estructura de suport per a vistes `posts_by_synapse`
-- (Veure a sota per a la visualització actual)
--
CREATE TABLE `posts_by_synapse` (
`id` int(10) unsigned
,`url` varchar(512)
,`title` varchar(255)
,`excerpt` varchar(1000)
,`content` text
,`image_url` varchar(1024)
,`like_count` int(10) unsigned
,`favourite_count` int(10) unsigned
,`comment_count` int(10) unsigned
,`reputation` tinyint(3) unsigned
,`md5_hash` varchar(32)
,`guid` text
,`feed_id` int(10) unsigned
,`author_id` int(10) unsigned
,`published_at` timestamp
,`created_at` timestamp
,`updated_at` timestamp
,`deleted_at` timestamp
,`synapse_id` int(10) unsigned
,`sticked` tinyint(1)
);

-- --------------------------------------------------------

--
-- Estructura de suport per a vistes `posts_by_tag`
-- (Veure a sota per a la visualització actual)
--
CREATE TABLE `posts_by_tag` (
`id` int(10) unsigned
,`url` varchar(512)
,`title` varchar(255)
,`excerpt` varchar(1000)
,`content` text
,`image_url` varchar(1024)
,`like_count` int(10) unsigned
,`favourite_count` int(10) unsigned
,`comment_count` int(10) unsigned
,`reputation` tinyint(3) unsigned
,`md5_hash` varchar(32)
,`guid` text
,`feed_id` int(10) unsigned
,`author_id` int(10) unsigned
,`published_at` timestamp
,`created_at` timestamp
,`updated_at` timestamp
,`deleted_at` timestamp
,`tag_id` int(10) unsigned
);

-- --------------------------------------------------------

--
-- Estructura de suport per a vistes `posts_by_user`
-- (Veure a sota per a la visualització actual)
--
CREATE TABLE `posts_by_user` (
`id` int(10) unsigned
,`url` varchar(512)
,`title` varchar(255)
,`excerpt` varchar(1000)
,`content` text
,`image_url` varchar(1024)
,`like_count` int(10) unsigned
,`favourite_count` int(10) unsigned
,`comment_count` int(10) unsigned
,`reputation` tinyint(3) unsigned
,`md5_hash` varchar(32)
,`guid` text
,`feed_id` int(10) unsigned
,`author_id` int(10) unsigned
,`published_at` timestamp
,`created_at` timestamp
,`updated_at` timestamp
,`deleted_at` timestamp
,`user_id` int(10) unsigned
,`liked` tinyint(1)
,`favourited` tinyint(1)
,`commented` tinyint(1)
);

-- --------------------------------------------------------

--
-- Estructura de la taula `post_synapse`
--

CREATE TABLE `post_synapse` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `synapse_id` int(10) UNSIGNED NOT NULL,
  `sticked` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Posts attached to a synapse';

-- --------------------------------------------------------

--
-- Estructura de la taula `post_tag`
--

CREATE TABLE `post_tag` (
  `post_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tags attached to a post';

--
-- Disparadors `post_tag`
--
DELIMITER $$
CREATE TRIGGER `post_tag_after_delete` AFTER DELETE ON `post_tag` FOR EACH ROW BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count - 1
    WHERE tags.id = old.tag_id LIMIT 1;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `post_tag_after_insert` AFTER INSERT ON `post_tag` FOR EACH ROW BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count + 1
    WHERE tags.id = new.tag_id LIMIT 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de la taula `post_user`
--

CREATE TABLE `post_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `liked` tinyint(1) NOT NULL DEFAULT '0',
  `favourited` tinyint(1) NOT NULL DEFAULT '0',
  `commented` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='User reactions to a post';

--
-- Disparadors `post_user`
--
DELIMITER $$
CREATE TRIGGER `post_user_after_delete` AFTER DELETE ON `post_user` FOR EACH ROW BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count - old.liked,
        posts.favourite_count = posts.favourite_count - old.favourited
	WHERE posts.id = old.post_id LIMIT 1;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `post_user_after_insert` AFTER INSERT ON `post_user` FOR EACH ROW BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + new.liked,
        posts.favourite_count = posts.favourite_count + new.favourited
	WHERE posts.id = new.post_id LIMIT 1;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `post_user_after_update` AFTER UPDATE ON `post_user` FOR EACH ROW BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + (new.liked - old.liked),
        posts.favourite_count = posts.favourite_count + (new.favourited - old.favourited)
	WHERE posts.id = new.post_id LIMIT 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de la taula `projects`
--

CREATE TABLE `projects` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `schools`
--

CREATE TABLE `schools` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_spanish_ci,
  `payload` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `synapses`
--

CREATE TABLE `synapses` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `description` varchar(512) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `type` enum('authors','tags','synapses') COLLATE utf8mb4_spanish_ci DEFAULT 'synapses',
  `filters` text COLLATE utf8mb4_spanish_ci COMMENT 'Post filters (JSON)',
  `blocks` text COLLATE utf8mb4_spanish_ci COMMENT 'Ordered active blocks (JSON array)',
  `child_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `synapse_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'Parent synapse',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Bolcant dades de la taula `synapses`
--

INSERT INTO `synapses` (`id`, `name`, `description`, `slug`, `type`, `filters`, `blocks`, `child_count`, `synapse_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'General', 'Notícies que publiquen els centres educatius catalans.', 'general', 'synapses', NULL, NULL, 0, NULL, '2018-02-01 13:14:01', '2018-02-01 13:14:01', NULL),
(2, 'Administrator', NULL, 'administrator', 'authors', '{\"author_id\":1}', NULL, 0, NULL, '2018-02-01 13:14:01', '2018-02-01 13:14:01', NULL);

-- --------------------------------------------------------

--
-- Estructura de suport per a vistes `synapses_by_user`
-- (Veure a sota per a la visualització actual)
--
CREATE TABLE `synapses_by_user` (
`id` int(10) unsigned
,`name` varchar(255)
,`description` varchar(512)
,`slug` varchar(255)
,`type` enum('authors','tags','synapses')
,`filters` text
,`blocks` text
,`child_count` int(10) unsigned
,`synapse_id` int(10) unsigned
,`created_at` timestamp
,`updated_at` timestamp
,`deleted_at` timestamp
,`user_id` int(10) unsigned
,`role` enum('manager','editor','viewer')
);

-- --------------------------------------------------------

--
-- Estructura de la taula `synapse_user`
--

CREATE TABLE `synapse_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `synapse_id` int(10) UNSIGNED NOT NULL,
  `role` enum('manager','editor','viewer') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'viewer',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='User privilege over a synapse';

--
-- Bolcant dades de la taula `synapse_user`
--

INSERT INTO `synapse_user` (`id`, `user_id`, `synapse_id`, `role`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'manager', '2018-02-01 13:14:01', '2018-02-01 13:14:01'),
(2, 1, 1, 'viewer', '2018-02-01 13:14:01', '2018-02-01 13:14:01');

-- --------------------------------------------------------

--
-- Estructura de la taula `tags`
--

CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `post_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `synapse_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `territories`
--

CREATE TABLE `territories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `facet` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Facet indicator',
  `territory_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'Parent territory',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `role` enum('admin','author') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'author',
  `password` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `avatar_url` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `provider_uid` varchar(127) COLLATE utf8mb4_spanish_ci NOT NULL,
  `provider_token` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `disabled_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Bolcant dades de la taula `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `password`, `remember_token`, `avatar_url`, `provider_uid`, `provider_token`, `created_at`, `updated_at`, `disabled_at`) VALUES
(1, 'Administrator', 'admin@example.org', 'admin', '$2y$10$yM5wOjuxTZr/Hn0pNu/4Xe592j81znYUnRQyNSH1RGwoYwP3nKNFu', NULL, '/images/avatar.png', 'unknown', 'unknown', '2018-02-01 13:14:01', '2018-02-01 13:14:01', NULL);

-- --------------------------------------------------------

--
-- Estructura per a vista `posts_by_author`
--
DROP TABLE IF EXISTS `posts_by_author`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `posts_by_author`  AS  select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`authors`.`municipality_id` AS `municipality_id`,`authors`.`territory_id` AS `territory_id`,`authors`.`project_id` AS `project_id`,`authors`.`school_id` AS `school_id` from (`posts` join `authors` on((`posts`.`author_id` = `authors`.`id`))) ;

-- --------------------------------------------------------

--
-- Estructura per a vista `posts_by_synapse`
--
DROP TABLE IF EXISTS `posts_by_synapse`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `posts_by_synapse`  AS  select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_synapse`.`synapse_id` AS `synapse_id`,`post_synapse`.`sticked` AS `sticked` from (`posts` join `post_synapse` on((`post_synapse`.`post_id` = `posts`.`id`))) ;

-- --------------------------------------------------------

--
-- Estructura per a vista `posts_by_tag`
--
DROP TABLE IF EXISTS `posts_by_tag`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `posts_by_tag`  AS  select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_tag`.`tag_id` AS `tag_id` from (`posts` join `post_tag` on((`post_tag`.`post_id` = `posts`.`id`))) ;

-- --------------------------------------------------------

--
-- Estructura per a vista `posts_by_user`
--
DROP TABLE IF EXISTS `posts_by_user`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `posts_by_user`  AS  select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_user`.`user_id` AS `user_id`,`post_user`.`liked` AS `liked`,`post_user`.`favourited` AS `favourited`,`post_user`.`commented` AS `commented` from (`posts` join `post_user` on((`post_user`.`post_id` = `posts`.`id`))) ;

-- --------------------------------------------------------

--
-- Estructura per a vista `synapses_by_user`
--
DROP TABLE IF EXISTS `synapses_by_user`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `synapses_by_user`  AS  select `synapses`.`id` AS `id`,`synapses`.`name` AS `name`,`synapses`.`description` AS `description`,`synapses`.`slug` AS `slug`,`synapses`.`type` AS `type`,`synapses`.`filters` AS `filters`,`synapses`.`blocks` AS `blocks`,`synapses`.`child_count` AS `child_count`,`synapses`.`synapse_id` AS `synapse_id`,`synapses`.`created_at` AS `created_at`,`synapses`.`updated_at` AS `updated_at`,`synapses`.`deleted_at` AS `deleted_at`,`synapse_user`.`user_id` AS `user_id`,`synapse_user`.`role` AS `role` from (`synapses` join `synapse_user` on((`synapse_user`.`synapse_id` = `synapses`.`id`))) ;

--
-- Indexos per taules bolcades
--

--
-- Index de la taula `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `synapse_id_unique` (`synapse_id`),
  ADD KEY `authors_synapse_id_foreign_index` (`synapse_id`),
  ADD KEY `authors_municipality_id_foreign_index` (`municipality_id`),
  ADD KEY `authors_territory_id_foreign_index` (`territory_id`),
  ADD KEY `authors_school_id_foreign_index` (`school_id`),
  ADD KEY `authors_project_id_foreign_idx` (`project_id`),
  ADD KEY `authors_user_id_foreign_idx` (`user_id`),
  ADD KEY `authors_category_id_foreign_idx` (`category_id`);

--
-- Index de la taula `blocks`
--
ALTER TABLE `blocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blocks_synapse_id_foreign_index` (`synapse_id`);

--
-- Index de la taula `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `territories_uuid_unique` (`uuid`);

--
-- Index de la taula `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_post_id_foreign_posts_author_id_foreign_index` (`post_id`),
  ADD KEY `comments_user_id_foreign_posts_author_id_foreign_index` (`user_id`);

--
-- Index de la taula `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `feeds`
--
ALTER TABLE `feeds`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `feeds_url_unique` (`url`),
  ADD KEY `feeds_author_id_foreign_index` (`author_id`),
  ADD KEY `feeds_author_id_index` (`author_id`,`deleted_at`);

--
-- Index de la taula `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_reserved_reserved_at_index` (`queue`,`reserved`,`reserved_at`);

--
-- Index de la taula `municipalities`
--
ALTER TABLE `municipalities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `municipalities_uuid_unique` (`uuid`);

--
-- Index de la taula `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Index de la taula `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_url_unique` (`url`),
  ADD KEY `posts_feed_id_foreign_index` (`feed_id`),
  ADD KEY `posts_author_id_foreign_index` (`author_id`),
  ADD KEY `posts_published_at_index` (`published_at`,`deleted_at`),
  ADD KEY `posts_like_count_published_at_index` (`like_count`,`published_at`,`deleted_at`),
  ADD KEY `posts_favourite_count_published_at_index` (`favourite_count`,`published_at`,`deleted_at`),
  ADD KEY `posts_comment_count_published_at_index` (`comment_count`,`published_at`,`deleted_at`),
  ADD KEY `posts_reputation_published_at_index` (`reputation`,`published_at`,`deleted_at`),
  ADD KEY `posts_reputation_index` (`reputation`,`deleted_at`);
ALTER TABLE `posts` ADD FULLTEXT KEY `fulltext_index` (`title`,`content`);

--
-- Index de la taula `post_synapse`
--
ALTER TABLE `post_synapse`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `post_synapse_unique` (`synapse_id`,`post_id`),
  ADD KEY `post_synapse_post_id_foreign_index` (`post_id`),
  ADD KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`);

--
-- Index de la taula `post_tag`
--
ALTER TABLE `post_tag`
  ADD UNIQUE KEY `post_tag_unique` (`tag_id`,`post_id`),
  ADD KEY `post_tag_post_id_foreign_index` (`post_id`),
  ADD KEY `post_tag_tag_id_foreign_index` (`tag_id`);

--
-- Index de la taula `post_user`
--
ALTER TABLE `post_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `post_user_unique` (`user_id`,`post_id`),
  ADD KEY `post_user_post_id_foreign_index` (`post_id`),
  ADD KEY `post_user_user_id_foreign_index` (`user_id`),
  ADD KEY `post_user_actions_index` (`user_id`,`post_id`,`liked`,`favourited`,`commented`);

--
-- Index de la taula `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `projects_uuid_unique` (`uuid`);

--
-- Index de la taula `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `schools_uuid_unique` (`uuid`);

--
-- Index de la taula `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sessions_id_unique` (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`) USING BTREE;

--
-- Index de la taula `synapses`
--
ALTER TABLE `synapses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug_unique` (`slug`),
  ADD KEY `synapses_synapse_id_foreign_idx` (`synapse_id`);

--
-- Index de la taula `synapse_user`
--
ALTER TABLE `synapse_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `post_synapse_unique` (`user_id`,`synapse_id`),
  ADD KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`);

--
-- Index de la taula `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`),
  ADD UNIQUE KEY `tags_synapse_id_unique` (`synapse_id`),
  ADD KEY `tags_synapse_id_foreign_index` (`synapse_id`,`deleted_at`);

--
-- Index de la taula `territories`
--
ALTER TABLE `territories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `territories_uuid_unique` (`uuid`),
  ADD KEY `territories_territory_id_foreign_idx` (`territory_id`);

--
-- Index de la taula `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `provider_id_UNIQUE` (`provider_uid`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT per la taula `blocks`
--
ALTER TABLE `blocks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `feeds`
--
ALTER TABLE `feeds`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `municipalities`
--
ALTER TABLE `municipalities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `post_synapse`
--
ALTER TABLE `post_synapse`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `post_user`
--
ALTER TABLE `post_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `synapses`
--
ALTER TABLE `synapses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT per la taula `synapse_user`
--
ALTER TABLE `synapse_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT per la taula `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `territories`
--
ALTER TABLE `territories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restriccions per taules bolcades
--

--
-- Restriccions per la taula `authors`
--
ALTER TABLE `authors`
  ADD CONSTRAINT `authors_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_municipality_id_foreign` FOREIGN KEY (`municipality_id`) REFERENCES `municipalities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_school_id_foreign` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_territory_id_foreign` FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restriccions per la taula `blocks`
--
ALTER TABLE `blocks`
  ADD CONSTRAINT `blocks_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `feeds`
--
ALTER TABLE `feeds`
  ADD CONSTRAINT `feeds_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON UPDATE CASCADE;

--
-- Restriccions per la taula `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_feed_id_foreign` FOREIGN KEY (`feed_id`) REFERENCES `feeds` (`id`) ON UPDATE CASCADE;

--
-- Restriccions per la taula `post_synapse`
--
ALTER TABLE `post_synapse`
  ADD CONSTRAINT `post_synapse_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_synapse_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `post_tag`
--
ALTER TABLE `post_tag`
  ADD CONSTRAINT `post_tag_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `post_user`
--
ALTER TABLE `post_user`
  ADD CONSTRAINT `user_post_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_post_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `synapses`
--
ALTER TABLE `synapses`
  ADD CONSTRAINT `synapses_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restriccions per la taula `synapse_user`
--
ALTER TABLE `synapse_user`
  ADD CONSTRAINT `synapse_user_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `synapse_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restriccions per la taula `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restriccions per la taula `territories`
--
ALTER TABLE `territories`
  ADD CONSTRAINT `territories_territory_id_foreign` FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
