-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: sinapsi
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(550) COLLATE utf8mb4_spanish_ci NOT NULL,
  `type` enum('projects','schools','users') COLLATE utf8mb4_spanish_ci NOT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `municipality_id` int(10) unsigned DEFAULT NULL,
  `territory_id` int(10) unsigned DEFAULT NULL,
  `project_id` int(10) unsigned DEFAULT NULL,
  `school_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `synapse_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `synapse_id_unique` (`synapse_id`),
  KEY `authors_synapse_id_foreign_index` (`synapse_id`),
  KEY `authors_municipality_id_foreign_index` (`municipality_id`),
  KEY `authors_territory_id_foreign_index` (`territory_id`),
  KEY `authors_school_id_foreign_index` (`school_id`),
  KEY `authors_project_id_foreign_idx` (`project_id`),
  KEY `authors_user_id_foreign_idx` (`user_id`),
  KEY `authors_category_id_foreign_idx` (`category_id`),
  CONSTRAINT `authors_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_municipality_id_foreign` FOREIGN KEY (`municipality_id`) REFERENCES `municipalities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_school_id_foreign` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_territory_id_foreign` FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Administrator','users',NULL,NULL,NULL,NULL,1,2,2018,'2018-02-01 13:14:01',NULL);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blocks`
--

DROP TABLE IF EXISTS `blocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blocks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_spanish_ci,
  `options` text COLLATE utf8mb4_spanish_ci,
  `synapse_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `blocks_synapse_id_foreign_index` (`synapse_id`),
  CONSTRAINT `blocks_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blocks`
--

LOCK TABLES `blocks` WRITE;
/*!40000 ALTER TABLE `blocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `blocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `territories_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `content` varchar(500) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `comments_post_id_foreign_posts_author_id_foreign_index` (`post_id`),
  KEY `comments_user_id_foreign_posts_author_id_foreign_index` (`user_id`),
  CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `comments_after_insert` AFTER INSERT
ON `comments` FOR EACH ROW
BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count + 1
    WHERE posts.id = new.post_id LIMIT 1;
    
    INSERT INTO post_user (post_id, user_id, commented)
        VALUES (new.post_id, new.user_id, 1)
        ON DUPLICATE KEY UPDATE commented = 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `comments_after_delete` AFTER DELETE
ON `comments` FOR EACH ROW
BEGIN
    UPDATE posts SET
        posts.comment_count = posts.comment_count - 1
    WHERE posts.id = old.post_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `queue` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feeds`
--

DROP TABLE IF EXISTS `feeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feeds` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(512) CHARACTER SET ascii NOT NULL,
  `etag` text COLLATE utf8mb4_spanish_ci,
  `author_id` int(10) unsigned NOT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `feeds_url_unique` (`url`),
  KEY `feeds_author_id_foreign_index` (`author_id`),
  KEY `feeds_author_id_index` (`author_id`,`deleted_at`),
  CONSTRAINT `feeds_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feeds`
--

LOCK TABLES `feeds` WRITE;
/*!40000 ALTER TABLE `feeds` DISABLE KEYS */;
/*!40000 ALTER TABLE `feeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_reserved_reserved_at_index` (`queue`,`reserved`,`reserved_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipalities`
--

DROP TABLE IF EXISTS `municipalities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `municipalities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `municipalities_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipalities`
--

LOCK TABLES `municipalities` WRITE;
/*!40000 ALTER TABLE `municipalities` DISABLE KEYS */;
/*!40000 ALTER TABLE `municipalities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_synapse`
--

DROP TABLE IF EXISTS `post_synapse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_synapse` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `synapse_id` int(10) unsigned NOT NULL,
  `sticked` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_synapse_unique` (`synapse_id`,`post_id`),
  KEY `post_synapse_post_id_foreign_index` (`post_id`),
  KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`),
  CONSTRAINT `post_synapse_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_synapse_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Posts attached to a synapse';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_synapse`
--

LOCK TABLES `post_synapse` WRITE;
/*!40000 ALTER TABLE `post_synapse` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_synapse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tag`
--

DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_tag` (
  `post_id` int(10) unsigned NOT NULL,
  `tag_id` int(10) unsigned NOT NULL,
  UNIQUE KEY `post_tag_unique` (`tag_id`,`post_id`),
  KEY `post_tag_post_id_foreign_index` (`post_id`),
  KEY `post_tag_tag_id_foreign_index` (`tag_id`),
  CONSTRAINT `post_tag_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tags attached to a post';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tag`
--

LOCK TABLES `post_tag` WRITE;
/*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_tag_after_insert` AFTER INSERT
ON `post_tag` FOR EACH ROW
BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count + 1
    WHERE tags.id = new.tag_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_tag_after_delete` AFTER DELETE
ON `post_tag` FOR EACH ROW
BEGIN
    UPDATE tags SET
        tags.post_count = tags.post_count - 1
    WHERE tags.id = old.tag_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `post_user`
--

DROP TABLE IF EXISTS `post_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `liked` tinyint(1) NOT NULL DEFAULT '0',
  `favourited` tinyint(1) NOT NULL DEFAULT '0',
  `commented` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_user_unique` (`user_id`,`post_id`),
  KEY `post_user_post_id_foreign_index` (`post_id`),
  KEY `post_user_user_id_foreign_index` (`user_id`),
  KEY `post_user_actions_index` (`user_id`,`post_id`,`liked`,`favourited`,`commented`),
  CONSTRAINT `user_post_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_post_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='User reactions to a post';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_user`
--

LOCK TABLES `post_user` WRITE;
/*!40000 ALTER TABLE `post_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_user_after_insert` AFTER INSERT
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + new.liked,
        posts.favourite_count = posts.favourite_count + new.favourited
	WHERE posts.id = new.post_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_user_after_update` AFTER UPDATE
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count + (new.liked - old.liked),
        posts.favourite_count = posts.favourite_count + (new.favourited - old.favourited)
	WHERE posts.id = new.post_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_user_after_delete` AFTER DELETE
ON `post_user` FOR EACH ROW
BEGIN
    UPDATE posts SET
		posts.like_count = posts.like_count - old.liked,
        posts.favourite_count = posts.favourite_count - old.favourited
	WHERE posts.id = old.post_id LIMIT 1;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(512) CHARACTER SET ascii NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `excerpt` varchar(1000) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_spanish_ci,
  `image_url` varchar(1024) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `like_count` int(10) unsigned NOT NULL DEFAULT '0',
  `favourite_count` int(10) unsigned NOT NULL DEFAULT '0',
  `comment_count` int(10) unsigned NOT NULL DEFAULT '0',
  `reputation` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `md5_hash` varchar(32) COLLATE utf8mb4_spanish_ci NOT NULL,
  `guid` text COLLATE utf8mb4_spanish_ci NOT NULL,
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

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `posts_by_author`
--

DROP TABLE IF EXISTS `posts_by_author`;
/*!50001 DROP VIEW IF EXISTS `posts_by_author`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `posts_by_author` AS SELECT 
 1 AS `id`,
 1 AS `url`,
 1 AS `title`,
 1 AS `excerpt`,
 1 AS `content`,
 1 AS `image_url`,
 1 AS `like_count`,
 1 AS `favourite_count`,
 1 AS `comment_count`,
 1 AS `reputation`,
 1 AS `md5_hash`,
 1 AS `guid`,
 1 AS `feed_id`,
 1 AS `author_id`,
 1 AS `published_at`,
 1 AS `created_at`,
 1 AS `updated_at`,
 1 AS `deleted_at`,
 1 AS `municipality_id`,
 1 AS `territory_id`,
 1 AS `project_id`,
 1 AS `school_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `posts_by_synapse`
--

DROP TABLE IF EXISTS `posts_by_synapse`;
/*!50001 DROP VIEW IF EXISTS `posts_by_synapse`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `posts_by_synapse` AS SELECT 
 1 AS `id`,
 1 AS `url`,
 1 AS `title`,
 1 AS `excerpt`,
 1 AS `content`,
 1 AS `image_url`,
 1 AS `like_count`,
 1 AS `favourite_count`,
 1 AS `comment_count`,
 1 AS `reputation`,
 1 AS `md5_hash`,
 1 AS `guid`,
 1 AS `feed_id`,
 1 AS `author_id`,
 1 AS `published_at`,
 1 AS `created_at`,
 1 AS `updated_at`,
 1 AS `deleted_at`,
 1 AS `synapse_id`,
 1 AS `sticked`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `posts_by_tag`
--

DROP TABLE IF EXISTS `posts_by_tag`;
/*!50001 DROP VIEW IF EXISTS `posts_by_tag`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `posts_by_tag` AS SELECT 
 1 AS `id`,
 1 AS `url`,
 1 AS `title`,
 1 AS `excerpt`,
 1 AS `content`,
 1 AS `image_url`,
 1 AS `like_count`,
 1 AS `favourite_count`,
 1 AS `comment_count`,
 1 AS `reputation`,
 1 AS `md5_hash`,
 1 AS `guid`,
 1 AS `feed_id`,
 1 AS `author_id`,
 1 AS `published_at`,
 1 AS `created_at`,
 1 AS `updated_at`,
 1 AS `deleted_at`,
 1 AS `tag_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `posts_by_user`
--

DROP TABLE IF EXISTS `posts_by_user`;
/*!50001 DROP VIEW IF EXISTS `posts_by_user`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `posts_by_user` AS SELECT 
 1 AS `id`,
 1 AS `url`,
 1 AS `title`,
 1 AS `excerpt`,
 1 AS `content`,
 1 AS `image_url`,
 1 AS `like_count`,
 1 AS `favourite_count`,
 1 AS `comment_count`,
 1 AS `reputation`,
 1 AS `md5_hash`,
 1 AS `guid`,
 1 AS `feed_id`,
 1 AS `author_id`,
 1 AS `published_at`,
 1 AS `created_at`,
 1 AS `updated_at`,
 1 AS `deleted_at`,
 1 AS `user_id`,
 1 AS `liked`,
 1 AS `favourited`,
 1 AS `commented`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `projects_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schools`
--

DROP TABLE IF EXISTS `schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schools` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `schools_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schools`
--

LOCK TABLES `schools` WRITE;
/*!40000 ALTER TABLE `schools` DISABLE KEYS */;
/*!40000 ALTER TABLE `schools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_spanish_ci,
  `payload` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sessions_id_unique` (`id`),
  UNIQUE KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `synapse_user`
--

DROP TABLE IF EXISTS `synapse_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synapse_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `synapse_id` int(10) unsigned NOT NULL,
  `role` enum('manager','editor','viewer') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'viewer',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_synapse_unique` (`user_id`,`synapse_id`),
  KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`),
  CONSTRAINT `synapse_user_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `synapse_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='User privilege over a synapse';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `synapse_user`
--

LOCK TABLES `synapse_user` WRITE;
/*!40000 ALTER TABLE `synapse_user` DISABLE KEYS */;
INSERT INTO `synapse_user` VALUES (1,1,2,'manager','2018-02-01 13:14:01','2018-02-01 13:14:01'),(2,1,1,'viewer','2018-02-01 13:14:01','2018-02-01 13:14:01');
/*!40000 ALTER TABLE `synapse_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `synapses`
--

DROP TABLE IF EXISTS `synapses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synapses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `description` varchar(512) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `type` enum('authors','tags','synapses') COLLATE utf8mb4_spanish_ci DEFAULT 'synapses',
  `filters` text COLLATE utf8mb4_spanish_ci COMMENT 'Post filters (JSON)',
  `blocks` text COLLATE utf8mb4_spanish_ci COMMENT 'Ordered active blocks (JSON array)',
  `child_count` int(10) unsigned NOT NULL DEFAULT '0',
  `synapse_id` int(10) unsigned DEFAULT NULL COMMENT 'Parent synapse',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug_unique` (`slug`),
  KEY `synapses_synapse_id_foreign_idx` (`synapse_id`),
  CONSTRAINT `synapses_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `synapses`
--

LOCK TABLES `synapses` WRITE;
/*!40000 ALTER TABLE `synapses` DISABLE KEYS */;
INSERT INTO `synapses` VALUES (1,'General','NotÃ­cies que publiquen els centres educatius catalans.','general','synapses',NULL,NULL,0,NULL,'2018-02-01 13:14:01','2018-02-01 13:14:01',NULL),(2,'Administrator',NULL,'administrator','authors','{\"author_id\":1}',NULL,0,NULL,'2018-02-01 13:14:01','2018-02-01 13:14:01',NULL);
/*!40000 ALTER TABLE `synapses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `synapses_by_user`
--

DROP TABLE IF EXISTS `synapses_by_user`;
/*!50001 DROP VIEW IF EXISTS `synapses_by_user`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `synapses_by_user` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `description`,
 1 AS `slug`,
 1 AS `type`,
 1 AS `filters`,
 1 AS `blocks`,
 1 AS `child_count`,
 1 AS `synapse_id`,
 1 AS `created_at`,
 1 AS `updated_at`,
 1 AS `deleted_at`,
 1 AS `user_id`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `post_count` int(10) unsigned NOT NULL DEFAULT '0',
  `synapse_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_slug_unique` (`slug`),
  UNIQUE KEY `tags_synapse_id_unique` (`synapse_id`),
  KEY `tags_synapse_id_foreign_index` (`synapse_id`,`deleted_at`),
  CONSTRAINT `tags_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `territories`
--

DROP TABLE IF EXISTS `territories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `territories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `uuid` varchar(36) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `facet` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Facet indicator',
  `territory_id` int(10) unsigned DEFAULT NULL COMMENT 'Parent territory',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `territories_uuid_unique` (`uuid`),
  KEY `territories_territory_id_foreign_idx` (`territory_id`),
  CONSTRAINT `territories_territory_id_foreign` FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `territories`
--

LOCK TABLES `territories` WRITE;
/*!40000 ALTER TABLE `territories` DISABLE KEYS */;
/*!40000 ALTER TABLE `territories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
  `disabled_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `provider_id_UNIQUE` (`provider_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Administrator','admin@example.org','admin','$2y$10$yM5wOjuxTZr/Hn0pNu/4Xe592j81znYUnRQyNSH1RGwoYwP3nKNFu',NULL,'/images/avatar.png','unknown','unknown','2018-02-01 13:14:01','2018-02-01 13:14:01',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `posts_by_author`
--

/*!50001 DROP VIEW IF EXISTS `posts_by_author`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_by_author` AS select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`authors`.`municipality_id` AS `municipality_id`,`authors`.`territory_id` AS `territory_id`,`authors`.`project_id` AS `project_id`,`authors`.`school_id` AS `school_id` from (`posts` join `authors` on((`posts`.`author_id` = `authors`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `posts_by_synapse`
--

/*!50001 DROP VIEW IF EXISTS `posts_by_synapse`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_by_synapse` AS select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_synapse`.`synapse_id` AS `synapse_id`,`post_synapse`.`sticked` AS `sticked` from (`posts` join `post_synapse` on((`post_synapse`.`post_id` = `posts`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `posts_by_tag`
--

/*!50001 DROP VIEW IF EXISTS `posts_by_tag`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_by_tag` AS select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_tag`.`tag_id` AS `tag_id` from (`posts` join `post_tag` on((`post_tag`.`post_id` = `posts`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `posts_by_user`
--

/*!50001 DROP VIEW IF EXISTS `posts_by_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_by_user` AS select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_user`.`user_id` AS `user_id`,`post_user`.`liked` AS `liked`,`post_user`.`favourited` AS `favourited`,`post_user`.`commented` AS `commented` from (`posts` join `post_user` on((`post_user`.`post_id` = `posts`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `synapses_by_user`
--

/*!50001 DROP VIEW IF EXISTS `synapses_by_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `synapses_by_user` AS select `synapses`.`id` AS `id`,`synapses`.`name` AS `name`,`synapses`.`description` AS `description`,`synapses`.`slug` AS `slug`,`synapses`.`type` AS `type`,`synapses`.`filters` AS `filters`,`synapses`.`blocks` AS `blocks`,`synapses`.`child_count` AS `child_count`,`synapses`.`synapse_id` AS `synapse_id`,`synapses`.`created_at` AS `created_at`,`synapses`.`updated_at` AS `updated_at`,`synapses`.`deleted_at` AS `deleted_at`,`synapse_user`.`user_id` AS `user_id`,`synapse_user`.`role` AS `role` from (`synapses` join `synapse_user` on((`synapse_user`.`synapse_id` = `synapses`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-10 14:53:20
