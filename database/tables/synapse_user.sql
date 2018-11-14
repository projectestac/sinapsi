/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synapse_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `synapse_id` int(10) unsigned NOT NULL,
  `role` enum('manager','editor','viewer') NOT NULL DEFAULT 'viewer',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_synapse_unique` (`user_id`,`synapse_id`),
  KEY `post_synapse_synapse_id_foreign_index` (`synapse_id`),
  CONSTRAINT `synapse_user_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `synapse_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='User privilege over a synapse';
/*!40101 SET character_set_client = @saved_cs_client */;

