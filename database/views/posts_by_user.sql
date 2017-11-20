/*!50001 DROP VIEW IF EXISTS `posts_by_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_by_user` AS select `posts`.`id` AS `id`,`posts`.`url` AS `url`,`posts`.`title` AS `title`,`posts`.`excerpt` AS `excerpt`,`posts`.`content` AS `content`,`posts`.`image_url` AS `image_url`,`posts`.`like_count` AS `like_count`,`posts`.`favourite_count` AS `favourite_count`,`posts`.`comment_count` AS `comment_count`,`posts`.`reputation` AS `reputation`,`posts`.`md5_hash` AS `md5_hash`,`posts`.`guid` AS `guid`,`posts`.`feed_id` AS `feed_id`,`posts`.`author_id` AS `author_id`,`posts`.`published_at` AS `published_at`,`posts`.`created_at` AS `created_at`,`posts`.`updated_at` AS `updated_at`,`posts`.`deleted_at` AS `deleted_at`,`post_user`.`user_id` AS `user_id`,`post_user`.`liked` AS `liked`,`post_user`.`favourited` AS `favourited`,`post_user`.`commented` AS `commented` from (`posts` left join `post_user` on((`post_user`.`post_id` = `posts`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

