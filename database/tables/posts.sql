/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(512) CHARSET ascii NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(1000) DEFAULT NULL,
  `content` text,
  `image_url` varchar(1024) DEFAULT NULL,
  `like_count` int(10) unsigned NOT NULL DEFAULT '0',
  `favourite_count` int(10) unsigned NOT NULL DEFAULT '0',
  `comment_count` int(10) unsigned NOT NULL DEFAULT '0',
  `reputation` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `md5_hash` varchar(32) NOT NULL,
  `guid` text NOT NULL,
  `feed_id` int(10) unsigned NOT NULL,
  `author_id` int(10) unsigned NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_url_unique` (`url`),
  KEY `posts_feed_id_foreign_index` (`feed_id`),
  KEY `posts_author_id_foreign_index` (`author_id`),
  KEY `posts_published_at_index` (`published_at`,`deleted_at`),
  KEY `posts_like_count_published_at_index` (`like_count`,`published_at`,`deleted_at`),
  KEY `posts_favourite_count_published_at_index` (`favourite_count`,`published_at`,`deleted_at`),
  KEY `posts_comment_count_published_at_index` (`comment_count`,`published_at`,`deleted_at`),
  KEY `posts_reputation_published_at_index` (`reputation`,`published_at`,`deleted_at`),
  KEY `posts_reputation_index` (`reputation`,`deleted_at`),
  FULLTEXT KEY `fulltext_index` (`title`,`content`),
  CONSTRAINT `posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `posts_feed_id_foreign` FOREIGN KEY (`feed_id`) REFERENCES `feeds` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

