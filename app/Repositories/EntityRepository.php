<?php

namespace Sinapsi\Repositories;

use Illuminate\Support\Facades\DB;
use Sinapsi\Post;
use Sinapsi\Entity;

class EntityRepository
{
    /* TODO: convert to Eloquent
    public function getEduEntities($type = null)
    {
        $query = 'SELECT e1.name AS e1_name,
                         e1.type AS e1_type, 
                         e1.id AS e1_id, 
                         e1.codename AS e1_codename,
                         e1.location AS e1_location,
                         e1.image AS e1_logo,
                         e2.name AS e2_name,
                         e2.codeid AS e2_codeid,
                         e3.name AS e3_name,
                         e3.id AS e3_id
                  FROM entities AS e1
                  INNER JOIN entities AS e2
                      ON e1.parent_id = e2.id
                  INNER JOIN entities AS e3
                      ON e2.parent_id = e3.id
                  WHERE e1.type NOT IN ("Projecte")';

        $entities = DB::select($query);

        return $entities;
    }*/

    public function getEduEntities($type = null)
    {
        $query = 'SELECT e1.name AS e1_name,
                         e1.type AS e1_type, 
                         e1.id AS e1_id, 
                         e1.slug AS e1_codename,
                         e1.municipi AS e1_location,
                         e1.image AS e1_logo
                  FROM entities AS e1
                  WHERE e1.type NOT IN ("Projecte")';

        $entities = DB::select($query);

        return $entities;
    }

    /**
     * getProjects
     * Get Projects ordered by last post (descendant order)
     * Jerarchy example: e1 is a project, e2 is a school, e3 is SE
     * @return mixed
     */

    public function getProjects()
    {
        $projects = Post::selectRaw(
            'e1.name AS name, 
             e1.id AS id,
             e1.codeid AS codeid,
             e1.slug AS slug,
             e1.image AS logo,
             e2.name AS parent_name,
             e2.codeid AS parent_codeid, 
             e2.municipi AS parent_location, 
             e3.name AS grandpa_name,
             e3.id AS grandpa_id,
             COUNT(posts.id) AS num_posts, 
             MAX(posts.created_at) AS last_post')
            ->rightJoin('channels', 'posts.channel_id', '=', 'channels.id')
            ->rightJoin('entities AS e1', 'channels.obj_id', '=', 'e1.id')
            ->rightJoin('entities AS e2', 'e1.parent_id', '=', 'e2.id')
            ->rightJoin('entities AS e3', 'e2.parent_id', '=', 'e3.id')
            ->where('e1.type', 'Projecte')
            ->groupBy('channels.id')
            ->orderBy('last_post', 'DESC')
            ->get();

            //$projects = Entity::where('type','Projecte')->get();

        return $projects;
    }


    public function getUsers()
    {
        $users = Entity::select(
            'users.name', 'users.id', 'users.avatar',
            'entities.name AS school_name', 'users.reputation',
            'entities.slug AS school_codename',
            'entities.municipi AS school_location')
            ->rightJoin('users', 'users.entity_id', '=', 'entities.id')
            ->orderBy('users.reputation', 'DESC')->get();
        return $users;
    }
}
