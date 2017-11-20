/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synapses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `type` enum('authors','tags','synapses') DEFAULT 'synapses',
  `filters` json DEFAULT NULL COMMENT 'Post filters',
  `blocks` json DEFAULT NULL COMMENT 'Ordered active blocks',
  `child_count` int(10) unsigned NOT NULL DEFAULT '0',
  `synapse_id` int(10) unsigned DEFAULT NULL COMMENT 'Parent synapse',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug_unique` (`slug`),
  KEY `synapses_synapse_id_foreign_idx` (`synapse_id`),
  CONSTRAINT `synapses_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

