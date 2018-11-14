/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) CHARSET utf8 DEFAULT NULL,
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
