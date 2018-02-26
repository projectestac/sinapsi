-- Synapses by user

CREATE DEFINER=CURRENT_USER
VIEW `synapses_by_user` AS
    SELECT
        `synapses`.*,
        `synapse_user`.`user_id`,
        `synapse_user`.`role`
    FROM `synapses` INNER JOIN `synapse_user` ON
        `synapse_user`.`synapse_id` = `synapses`.`id`;