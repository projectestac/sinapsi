/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(550) NOT NULL,
  `type` enum('projects','schools','users') NOT NULL,
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
  CONSTRAINT `authors_municipality_id_foreign` FOREIGN KEY (`municipality_id`) REFERENCES `municipalities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_school_id_foreign` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_synapse_id_foreign` FOREIGN KEY (`synapse_id`) REFERENCES `synapses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_territory_id_foreign` FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `authors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

