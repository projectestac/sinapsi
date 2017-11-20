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
  UNIQUE KEY `post_synapse_unique` (`post_id`,`synapse_id`),
  KEY `post_synapse_post_id_foreign_index` (`post_id`),
  KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`),
  CONSTRAINT `post_synapse_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_synapse_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Posts attached to a synapse';
/*!40101 SET character_set_client = @saved_cs_client */;

