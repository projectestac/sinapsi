<?php

namespace Sinapsi\Repositories;

use Illuminate\Support\Facades\DB;
use Cache;

use Sinapsi\Post;
use Sinapsi\PostTag;
use Sinapsi\PostComment;
use Sinapsi\Entity;
use Sinapsi\Channel;

class PostRepository
{
    public function buildTermWhere($terms)
    {
        $terms = array_map("sns_quote", explode(",", $terms));
        $terms = implode(" ", $terms);

        return "MATCH (posts.title, posts.description, posts.content, posts.str_tags)
             AGAINST('" . addslashes($terms) . "' IN BOOLEAN MODE)";
    }

    public function getWhere($params)
    {
        $where = '';
        // Simple post id
        if (!empty($params['id'])) {
            $where .= 'posts.id = ' . $params['id'];
            return $where;
        }

        // Filters
        // terms
        if (!empty($params['q'])) {
            $where .= ' WHERE ' . $this->buildTermWhere($params['q']);
        }

        // List of Tags
        if (!empty($params['t'])) {
            $tags_ids = explode(",", $params['t']);
            $num_tags = count($tags_ids);

            $posts_ids = PostTag::selectRaw('post_id, COUNT(*) AS c')
                ->whereIn('tag_id', $tags_ids)
                ->groupBy('post_id');

            if (!empty($params['and'])) {
                $posts_ids = $posts_ids->having('c', "=", $num_tags);
            }

            $posts_ids = $posts_ids->get();

            if ($posts_ids->count()) {
                $posts = implode(",", $posts_ids->pluck('post_id')->toArray());
            } else {
                $posts = "-1";
            }

            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= " posts.id IN (" . $posts . ")";
        }

        // By tag (only one)
        if (!empty($params['tag'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= "tag = " . $params['tag'];
        }

        // By City
        if (!empty($params['l'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $l = explode(",", $params['l']);
            $locations = implode(",", array_map("sns_quote", $l));
            $where .= " entities.municipi IN (" . $locations . ")";
        }

        // By Servei educatiu
        if (!empty($params['se'])) {

            $se_arr = array();
            $arr = explode(",", $params['se']);

            foreach ($arr as $se_codeid) {                
                $se_codeid = (strlen($se_codeid) < 8) ? "0" . $se_codeid : $se_codeid;
                $__se = Entity::select('id')->where('codeid', $se_codeid)->first();
                array_push($se_arr, $__se->id);
            }

            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.parent_id IN (' . implode(',', $se_arr) . ')';
        }

        // By Servei territorial
        if (!empty($params['st'])) {
            $st = array('VOC'=> trans('messages.voccidental'),
                        'BLL'=> trans('messages.baix_llobregat'),
                        'TAR'=> trans('messages.tarragona'),
                        'CEB'=> trans('messages.barcelona_education'),
                        'MVO'=> trans('messages.voriental_maresme'),
                        'BCO'=> trans('messages.comarques_barcelona'),
                        'CCE'=> trans('messages.central_catalonia'),
                        'TEB'=> trans('messages.terres_ebre'),
                        'GIR'=> trans('messages.girona'),
                        'LLE'=> trans('messages.lleida')
                        );
            $st_arr = array();
            $arr = explode(",", $params['st']);
            foreach ($arr as $st_code) {
                array_push($st_arr, '"'.$st[$st_code].'"');
            }
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.delegacio IN (' . implode(',',$st_arr) . ')';
        }

        // By School type
        if (!empty($params['y'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $y = explode(",", $params['y']);
            $types = implode(",", array_map("sns_quote", $y));
            $where .= ' entities.type IN (' . $types . ')';
        }

        // By School
        if (!empty($params['s'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.id IN (' . $params['s'] . ')';
        }

        if (!empty($params['school'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.slug = "' . $params['school'] . '"';
        }

        // By Channels
        if (!empty($params['channels'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' posts.channel_id IN (' . $params['channels'] . ')';
        }

        // By Projects
        if (!empty($params['p'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' posts.channel_id IN (' . $params['p'] . ')';
        }

        if (!empty($params['codename'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.slug = "' . $params['codename'] . '"';
        }

        if (!empty($params['project'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' entities.id = ' . $params['project'];
        }

        if (!empty($params['sd']) && !empty($params['ed'])) {
            $where .= $where == '' ? ' WHERE ' : ' AND ';
            $where .= ' posts.pub_date BETWEEN "' . $params['sd'] .'" AND DATE_ADD("'.$params['ed'].'",INTERVAL 1 DAY)';
        }

        return $where;
    }

    public function getOrderBy($params)
    {
        $orderby = "";

        if (!empty($params['o'])) {
            switch ($params['o']) {
                case 'o':
                    $orderby .= ' ORDER BY tsticky DESC, posts.pub_date ASC';
                    break;
                case 'v':
                    $orderby .= ' HAVING (num_likes > 0) ORDER BY tsticky DESC, num_likes DESC, posts.pub_date DESC';
                    break;
                case 'f':
                    $orderby .= ' HAVING (num_favorites > 0) ORDER BY tsticky DESC, num_favorites DESC, posts.pub_date DESC';
                    break;
                case 'c':
                    $orderby .= ' HAVING (num_comments > 0) ORDER BY tsticky DESC, num_comments DESC, posts.pub_date DESC';
                    break;
                case 'd':
                    $orderby .= ' HAVING (score > 0) ORDER BY tsticky DESC, score DESC, posts.pub_date DESC';
                    break;
                case 'a':
                    $orderby = ' ORDER BY posts.created_at DESC';
                    break;
                case 'n':
                default:
                    $orderby .= ' ORDER BY tsticky DESC, posts.pub_date DESC';
            }
        } else { // No order set
            $orderby .= ' ORDER BY tsticky DESC, posts.pub_date DESC';
        }

        return $orderby;
    }

    /***
     * baseSelect
     * Get latest [page_size] posts according to filters sorted by sticky and [order parameter]
     *
     * @param $params
     * @return string
     *
     * Thanks Ricardo
     * https://gallir.wordpress.com/2011/02/02/optimizando-obsesivamente-las-consultas-al-mysql/
     */

    public function baseSelect($params)
    {
        $is_sinapsi = !empty($params['sinapsi']) ? true : false;

        $select = 'SELECT DISTINCT(posts.id) AS post_id, posts.pub_date';

        if ($is_sinapsi) {
            $select .= ', sinapsi_posts_stickies.sticky AS tsticky';
        } else {
            $select .= ', posts.sticky AS tsticky';
        }

        if (!empty($params['o'])) {
            switch ($params['o']) {
                case 'd':
                    $select .= ',(SELECT SUM(score) FROM post_likes   
                                    WHERE post_votes.post_id    = posts.id ) as score';
                    $subselect = "SELECT DISTINCT(post_id) As id FROM post_likes";
                    break;
                case 'c':
                    $select .= ',(SELECT COUNT(*) FROM post_comments 
                                    WHERE post_comments.post_id = posts.id ) as num_comments';
                    break;
                    $subselect = "SELECT DISTINCT(post_id) As id FROM post_comments";
                case 'v':
                    $select .= ',(SELECT COUNT(*) FROM post_likes    
                                    WHERE post_likes.post_id    = posts.id ) as num_likes';
                    $subselect = "SELECT DISTINCT(post_id) AS id FROM post_likes";
                    break;
                case 'f':
                    $select .= ',(SELECT COUNT(*) FROM post_favorites    
                                    WHERE post_favorites.post_id    = posts.id ) as num_favorites';
                    $subselect = "SELECT DISTINCT(post_id) AS id FROM post_favorites";
                    break;
            }
        }

        $select .= ' FROM posts';

        if (!empty($params['st'])
            || !empty($params['se'])
            || !empty($params['y'])
            || !empty($params['l'])
            || !empty($params['s'])
            || !empty($params['school'])
            || !empty($params['channels'])
            || !empty($params['project'])
        ) {
            $select .= ' INNER JOIN channels ON posts.channel_id = channels.id
                        INNER JOIN entities ON entities.id = channels.obj_id';
        }

        if (!empty($params['t'])) {
            $select .= ' LEFT JOIN post_tags ON posts.id = post_tags.post_id
                        LEFT JOIN tags ON tags.id = post_tags.tag_id';
        }

        if (!empty($params['sinapsi'])) {
            $select .= ' LEFT JOIN sinapsi_posts_stickies ON sinapsi_posts_stickies.post_id = posts.id';
        }

        if (!empty($subselect)) {
            $select .= ' INNER JOIN (' . $subselect . ') AS S1 ON posts.id = S1.id';
        }

        $where = $this->getWhere($params);
        $orderby = $this->getOrderBy($params);

        $page = empty($params['page']) ? 0 : $params['page'] - 1;
        $page_size = empty($params['page_size']) ? 15 : $params['page_size'];
        $offset = $page * $page_size;

        $select .= $where . $orderby . " LIMIT $offset , $page_size";

        return $select;
    }

    /**
     * getPosts
     * Get all data from posts filtered by basePosts
     *
     * @param null $params
     * @return mixed
     */
    public function getPosts($params = null)
    {
        $is_sinapsi = !empty($params['sinapsi']) ? true : false;

        $query = 'SELECT posts.*,
        (SELECT COUNT(*) FROM post_comments WHERE post_comments.post_id = posts.id ) as num_comments,
        (SELECT COUNT(*) FROM post_likes    WHERE post_likes.post_id    = posts.id ) as num_likes,
        (SELECT SUM(score) FROM post_likes    WHERE post_likes.post_id    = posts.id ) as score,
        (SELECT COUNT(*) FROM post_favorites    WHERE post_favorites.post_id    = posts.id ) as num_favorites';

        if (auth()->check()) {
            $user_id = auth()->user()->id;

            $query .= ',
            (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id  
                             AND post_likes.user_id =' . $user_id . ') as liked,
            (SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id = posts.id  
                             AND post_favorites.user_id =' . $user_id . ') as favorited';
        }

        $query .= ',CASE WHEN channels.type = "User" 
                         THEN users.name
                         ELSE entities.name
                    END as source_name,
                   
                    CASE WHEN channels.type = "User" 
                         THEN parent_user.name
                         WHEN channels.type = "Project"
                         THEN CONCAT(e2.name,", ",e2.municipi) 
                         ELSE entities.municipi
                    END as source_location,
                   
                    CASE WHEN channels.type = "User" 
                              THEN CONCAT("user/",users.id) 
                         WHEN channels.type = "Project" 
                              THEN CONCAT("p/",entities.id)
                         ELSE CONCAT("s/",entities.slug)
                    END as source_url';

        $query .= ',GROUP_CONCAT(tags.slug SEPARATOR \', \') as tags';
        $query .= ',GROUP_CONCAT(tags.id SEPARATOR \', \') as tags_ids';

        if ($is_sinapsi) {
            $query .= ', CASE WHEN sinapsi_posts_stickies.sinapsi_id = ' . $params['sinapsi']['id'];
            $query .= ' THEN sinapsi_posts_stickies.sticky
                        ELSE NULL
                        END AS tsticky';
        } else {
            $query .= ', posts.sticky AS tsticky';
        }

        $query .= ' FROM  posts
                    INNER JOIN channels ON posts.channel_id = channels.id
                    INNER JOIN entities ON entities.id = channels.obj_id
                    LEFT JOIN entities AS e2 ON entities.parent_id = e2.id
                    LEFT JOIN users ON users.id = channels.obj_id
                    LEFT JOIN entities AS parent_user ON parent_user.id = users.entity_id
                    LEFT JOIN post_tags ON posts.id = post_tags.post_id
                    LEFT JOIN tags ON tags.id = post_tags.tag_id';

        if ($is_sinapsi) {
            $query .= ' LEFT JOIN sinapsi_posts_stickies ON sinapsi_posts_stickies.post_id = posts.id';
        }
        
        // Sinapsi manual
        if ($is_sinapsi && $params['sinapsi']['type'] == 'manual') {
            $query .= ' INNER JOIN sinapsi_posts ON ( sinapsi_posts.post_id = posts.id AND sinapsi_posts.sinapsi_id = ' . $params['sinapsi']['id'] . ")";
            $where = $this->getWhere($params);
            $query .= $where;
        } // Post
        elseif (!empty($params['id'])) {
            $query .= ' WHERE posts.id = ' . $params['id'];
        } else {
            $query .= ' INNER JOIN (' . $this->baseSelect($params) . ') AS P1 ON posts.id = P1.post_id ';
        }

        $query .= ' GROUP BY posts.id ';

        $query .= $this->getOrderBy($params);

        $posts = DB::select($query);

        return $posts;
    }

    /**
     * getPostsCount
     * Get number of posts according to filters
     *
     * @param null $params
     * @return mixed
     */

    public function getPostsCount($params)
    {
        $is_sinapsi = !empty($params['sinapsi']) ? true : false;

        $select = 'SELECT COUNT(DISTINCT(posts.id)) as total';

        $group_orderby = '';

        // order by
        if (!empty($params['o'])) {
            switch ($params['o']) {
                case 'd':
                    $select .= ',(SELECT SUM(score) FROM post_likes    
                                    WHERE post_likes.post_id    = posts.id ) as score';
                    $subselect = "SELECT DISTINCT(post_id) As id FROM post_likes";
                    break;
                case 'c':
                    $select .= ',(SELECT COUNT(*) FROM post_comments 
                                    WHERE post_comments.post_id = posts.id ) as num_comments';
                    break;
                    $subselect = "SELECT DISTINCT(post_id) As id FROM post_comments";
                case 'v':
                    $select .= ',(SELECT COUNT(*) FROM post_likes    
                                    WHERE post_likes.post_id    = posts.id ) as num_likes';
                    $subselect = "SELECT DISTINCT(post_id) AS id FROM post_likes";
                    break;
                case 'f':
                    $select .= ',(SELECT COUNT(*) FROM post_favorites    
                                    WHERE post_favorites.post_id    = posts.id ) as num_favorites';
                    $subselect = "SELECT DISTINCT(post_id) AS id FROM post_favorites";
                    break;
            }

            if ($is_sinapsi) {
                $select .= ', sinapsi_posts_stickies.sticky AS tsticky';
            } else {
                $select .= ', posts.sticky AS tsticky';
            }

            $group_orderby = '';

            if (in_array($params['o'], ['d', 'v', 'c'])) {
                $group_orderby .= ' GROUP BY posts.id ';
                $group_orderby .= $this->getOrderBy($params);
            }
        }

        $select .= ' FROM posts';

        if (!empty($params['st'])
            || !empty($params['se'])
            || !empty($params['y'])
            || !empty($params['l'])
            || !empty($params['s'])
            || !empty($params['school'])
            || !empty($params['project'])
            || !empty($params['channels'])
        ) {
            $select .= ' INNER JOIN channels ON posts.channel_id = channels.id
                    INNER JOIN entities ON entities.id = channels.obj_id';
        }

        if (!empty($params['t'])) {
            $select .= ' LEFT JOIN post_tags ON posts . id = post_tags . post_id
                       LEFT JOIN tags ON tags . id = post_tags . tag_id';
        }

        if (!empty($params['sinapsi'])) {
            $select .= ' LEFT JOIN sinapsi_posts_stickies ON sinapsi_posts_stickies.post_id = posts.id';
        }

        if ($is_sinapsi && $params['sinapsi']['type'] == 'manual') {
            $select .= ' INNER JOIN sinapsi_posts 
                         ON ( sinapsi_posts.post_id = posts.id 
                         AND sinapsi_posts.sinapsi_id = ' . $params['sinapsi']['id'] . ")";
        } elseif (!empty($subselect)) {
            $select .= ' INNER JOIN (' . $subselect . ') AS S1 ON posts.id = S1.id';
        }

        // where
        $where = $this->getWhere($params);

        $c = DB::select($select . $where . $group_orderby);

        $count = count($c);

        if ($count != 0) {
            $count = $count > 1 ? $count : $c[0]->total;
        }

        $page_size = 15;
        $last_page = intval(ceil($count / $page_size));
        $page = !empty($params['page']) ? $params['page'] : 1;

        return response()->json([
            'total_posts' => $count,
            'current_page' => $page,
            'last_page' => $last_page,
        ]);
    }


    /**
     * getPost
     * Get all data from post
     *
     * @param integer $id
     * @return mixed
     */
    public function getPost($id)
    {
        $query = 'posts.*,
        (SELECT COUNT(*) FROM post_comments WHERE post_comments.post_id = posts.id ) as num_comments,
        (SELECT COUNT(*) FROM post_likes    WHERE post_likes.post_id    = posts.id ) as num_likes,
        (SELECT SUM(score) FROM post_likes    WHERE post_likes.post_id    = posts.id ) as score,
        (SELECT COUNT(*) FROM post_favorites    WHERE post_favorites.post_id    = posts.id ) as num_favorites';

        if (auth()->check()) {
            $query .= ',
            (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id  
                             AND post_likes.user_id =' . auth()->user()->id . ') as liked,
            (SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id = posts.id  
                             AND post_favorites.user_id =' . auth()->user()->id . ') as favorited';
        }

        $query .= ', CASE WHEN channels.type = "User" THEN users.name
                         ELSE entities.name
                    END AS source_name,
                    CASE WHEN channels.type = "User" THEN parent_user.name 
                         WHEN channels.type = "Project" THEN e2.name
                         ELSE entities.municipi
                    END AS source_location,
                    CASE WHEN channels.type = "User" THEN CONCAT("user/",users.id) 
                         WHEN channels.type = "Project" THEN CONCAT("p/",entities.id)
                         ELSE CONCAT("s/",entities.slug)
                    END AS source_url';

        $query .= ',GROUP_CONCAT(tags.slug SEPARATOR \', \') AS tags';
        $query .= ',GROUP_CONCAT(tags.id SEPARATOR \', \') AS tags_ids';


        $post = Post::selectRaw($query)
            ->join('channels', 'posts.channel_id', '=', 'channels.id')
            ->join('entities', 'entities.id', '=', 'channels.obj_id')
            ->leftJoin('entities AS e2', 'entities.parent_id', '=', 'e2.id')
            ->leftJoin('users', 'users.id', '=', 'channels.obj_id')
            ->leftJoin('entities AS parent_user', 'parent_user.id', '=', 'users.entity_id')
            ->leftJoin('post_tags', 'posts.id', '=', 'post_tags.post_id')
            ->leftJoin('tags', 'tags.id', '=', 'post_tags.tag_id')
            ->where('posts.id', '=', $id)
            ->groupBy('posts.id')
            ->first();

        return $post;
    }

    public function comments($post_id)
    {
        $query = 'post_comments.id,
                post_comments.text, 
                post_comments.created_at,
                users.name AS user_name,
                users.avatar AS user_avatar,
                users.id AS user_id';

        return PostComment::selectRaw($query)
            ->join('posts', 'posts.id', '=', 'post_comments.post_id')
            ->leftJoin('users', 'users.id', '=', 'post_comments.user_id')
            ->where('post_comments.post_id', $post_id)
            ->get();
    }

    public function getComment($id)
    {
        $query = 'post_comments.id,
                  post_comments.text, 
                  post_comments.created_at,
                  users.name AS user_name,
                  users.avatar AS user_avatar,
                  users.id AS user_id';

        return PostComment::selectRaw($query)
            ->join('users', 'users.id', '=', 'post_comments.user_id')
            ->where('post_comments.id', $id)
            ->first();
    }
}
