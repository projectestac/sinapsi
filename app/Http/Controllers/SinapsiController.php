<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Gate;
use DB;

use Sinapsi\Events\SinapsisChanged;
use Sinapsi\Sinapsi;
use Sinapsi\SinapsiChannel;
use Sinapsi\Tag;
use Sinapsi\Block;
use Sinapsi\Repositories\PostRepository;
use Sinapsi\UserAbility;

class SinapsiController extends Controller
{
    public function __construct(PostRepository $PostRepository)
    {
        $this->postRepository = $PostRepository;
    }
    
    /**
     * Show a sinapsi
     *
     * @param Request $request
     * @param string $sinapsi_slug
     * @return view
     */
    public function index(Request $request, $sinapsi_slug='')
    {
        $params = $request->all();
        $sinapsi = Sinapsi::where('slug', $sinapsi_slug)->first();

        if (!$sinapsi) {
            return view('errors.sinapsi_not_found');
        }

        $sinapsi['breadcrumbs'] = $sinapsi->breadcrumbs();
        $sinapsi['tag'] = '';

        if (!empty($request->tag)) {
            $tag = Tag::where('slug', $request->tag)->first();
            $sinapsi['tag'] = $tag;
        }

        // Combine params from BBDD and params from url or ui search fields
        $filters_from_UI = $this->buildUrlFilters($params);
        $filters_from_DB = sns_parse_str($sinapsi->querystring);

        // Set search options
        // $search_options = ['city','tags','se','st','order','school_types','schools'];

        $blocks = Block::where('scope', 'sinapsi')
                       ->where('scope_id', $sinapsi->id)
                       ->orderBy('order', 'asc')
                       ->get();

        return view('sinapsi/index', compact([
            'sinapsi',
            'filters_from_UI',
            'filters_from_DB',
            'breadcrumb',
            'blocks'
        ]));
    }

    /**
     * Call embed sinapsi view
     *
     * @return view
     */
    public function embed(Request $request, $sinapsi_slug='')
    {
        $params = $request->all();

        $sinapsi = Sinapsi::where('slug', $sinapsi_slug)->first();

        $search_options = ['city','tags','se','st','order','school_types','schools'];
        $filters_from_UI = $this->buildUrlFilters($params);
        $filters_from_DB = sns_parse_str($sinapsi->querystring);

        $height = (!empty($params['h'])) ? $params['h'] : '500';
        $pv = (!empty($params['pv'])) ? $params['pv'] : 'sns-medium-card';
        $search_box = (!empty($params['search'])) ? $params['search'] : '';
        
        $pagetype = 'sinapsi';
        $info = $sinapsi->id;

        return view('embed', compact([
            'search_box',
            'sinapsi',
            'search_options',
            'height',
            'filters_from_UI',
            'filters_from_DB',
            'pv',
            'pagetype',
            'info'
        ]));
    }

    /**
     * Get posts by Sinapsi
     *
     * @param Request $request
     * @param $sinapsi_slug
     * @return mixed
     */
    public function posts(Request $request, $sinapsi_id)
    {
        // Get params form ui or url
        $request->flash();
        $params = $request->all();

        // Get params from db and merge
        $sinapsi = Sinapsi::findOrFail($sinapsi_id);

        $params_from_db = sns_parse_str($sinapsi->querystring);
        $params = sns_merge_params($params_from_db, $params);
        $params['sinapsi'] = array("id"=>$sinapsi->id, "type" => $sinapsi->type);

        $posts = $this->postRepository->getPosts($params);

        return $posts;
    }

    /**
     * Count Posts by Sinapsi
     *
     * @param Request $request
     * @param $sinapsi_id
     * @return mixed
     */
    public function getPostsCount(Request $request, $sinapsi_id)
    {
        // Get params form ui or url
        $request->flash();
        $params = $request->all();

        // Get params from db and merge
        $sinapsi = Sinapsi::findOrFail($sinapsi_id);
        $params_from_db = sns_parse_str($sinapsi->querystring);
        $params = sns_merge_params($params_from_db, $params);
        $params['sinapsi'] = array("id"=>$sinapsi->id, "type" => $sinapsi->type);
        $postCountInfo = $this->postRepository->getPostsCount($params);

        return $postCountInfo;
    }

    /**
     * Show the new sinapsi form
     *
     * @return view
     */
    public function create()
    {
        // TODO: rols
        $search_options = ['city','tags','se','st','order','school_types','schools','channels'];
        $selected = $this->clearSelected();
        $blocks = "";
        $sinapsis = Sinapsi::all();

        return view('sinapsi/create',
                compact([
                    'search_options',
                    'selected',
                    'blocks',
                    'sinapsis'
                ]));
    }

    /**
     * Save a new sinapsi
     *
     * @return view
     */
    public function store(Request $request)
    {
        // TODO: rols
        $querystring = getQueryString($request);
        $params = sns_parse_str($querystring);

        $request->flash();
        $params = $request->all();

        // Add new tags created directly
        if (!empty($params['tags'])) {
            foreach ($params['tags'] as $tag) {
                if (!Tag::findOrFail($tag)) {
                    $new_id = Tag::create([
                        'name' => $tag,
                        'slug' => slug($tag)
                    ]);
                }
            }
        }
        
        $parent_id = !empty($request->parent_id) ? $request->parent_id : null;

        // TODO: change codename to slug
        $sinapsi = Sinapsi::firstOrCreate([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
            'querystring' => $querystring,
            'type'  => $request->type,
            'postview'  => $request->postview,
            'parent_id' => $parent_id
        ]);

        if ($request->file('sns_logo')) {
            $sinapsi->logo = url('/').'/'.$sinapsi->saveLogo($request->file('sns_logo'));
        }
        $sinapsi->save();
        
        // BLOCKS
        $blocks = json_decode($request->blocks);

        if (!empty($blocks)) {
            foreach ($blocks as $block) {
                Block::create([
                        'type' => $block->type,
                        'options' => $block->options,
                        'title' => $block->title,
                        'content' => $block->content,
                        'scope' => "sinapsi",
                        'scope_id' => $sinapsi->id,
                        'order' => $block->order]
                );
            }
        }

        event(new SinapsisChanged());


        return redirect()->to($sinapsi->slug);
    }

    /**
     * Show the edit sinapsi form
     *
     * @param $sinapsi_codename
     * @return view
     */
    public function edit($sinapsi_codename)
    {
        /*$sinapsi = Sinapsi::where('slug', $sinapsi_codename)
            ->first();
    */

        $query = "SELECT e1.name AS name,
                         e1.logo AS logo, 
                         e1.id AS id, 
                         e1.slug AS slug, 
                         e1.description AS description,
                         e1.parent_id AS parent_id,
                         e1.type AS type,
                         e1.postview AS postview,
                         e1.querystring AS querystring,
                         e2.name AS parent_name
                  FROM sinapsis AS e1
                  LEFT JOIN sinapsis AS e2
                      ON e1.parent_id = e2.id
                  WHERE e1.slug='$sinapsi_codename'";

        $sinapsi = DB::select($query);

        if (count($sinapsi)) {
            $sinapsi = $sinapsi[0];
        }

        
        if (Gate::denies('manage', $sinapsi->id)) {
            return view('error',
                ["err_message" => "No teniu permissos per editar aquesta sinapsi"]);
        }

        $params = sns_parse_str($sinapsi->querystring);

        $selected = $this->buildUrlFilters($params);

        /*$selected_admins = UserAbility::where('scope','sinapsi')
                                        ->where('scope_id',$sinapsi->id)
                                        ->where('ability','manage')
                                        ->pluck('user_id');*/

        /*$selected["admins"] = implode(",",$selected_admins->toArray());

        $selected_editors = UserAbility::where('scope','sinapsi')
            ->where('scope_id',$sinapsi->id)
            ->where('ability','posts_manage')
            ->pluck('user_id');

        $selected["editors"] = implode(",",$selected_editors->toArray());*/

        $sinapsis = Sinapsi::all();

        $blocks = Block::where('scope', 'sinapsi')
            ->where('scope_id', $sinapsi->id)
            ->orderBy('order', 'asc')
            ->get();


        return view('sinapsi/edit',
                compact([
                    'sinapsi',
                    'selected',
                    'blocks',
                    'sinapsis'
                ]));
    }

    /**
     * Update sinapsi in database
     *
     * @return Response
     */
    public function update(Request $request)
    {
        $sinapsi = Sinapsi::where('slug', $request->sinapsi_codename)->first();

        if (Gate::denies('manage', $sinapsi->id)) {
            return view('error',
                ["err_message" => "No teniu permissos per editar aquesta sinapsi"]);
        }

        $sinapsi->name = $request->name;
        $sinapsi->slug = $request->slug;
        $sinapsi->description = $request->description;
        $sinapsi->type = $request->type;
        $sinapsi->postview = $request->postview;
        $sinapsi->parent_id = !empty($request->parent_id) ? $request->parent_id : null;

        if ($request->file('sns_logo')) {
            $sinapsi->logo = url('/').'/'.$sinapsi->saveLogo($request->file('sns_logo'));
        }

        $sinapsi->querystring = $request->querystring; //getQueryString($request);
        $sinapsi->save();

        // USERS
        // TODO: Not delete, update
        // Delete all existing abilities
        UserAbility::where('scope', 'sinapsi')
            ->where('scope_id', $sinapsi->id)
            ->where('ability', 'manage')
            ->delete();

        if (!empty($request->admins)) {
            foreach ($request->admins as $user_id) {
                UserAbility::create([
                    "scope" => 'sinapsi',
                    "scope_id" => $sinapsi->id,
                    "user_id" => $user_id,
                    "ability" => 'manage'
                ]);
            }
        }

        if (!empty($request->editors)) {
            foreach ($request->editors as $user_id) {
                UserAbility::create([
                    "scope" => 'sinapsi',
                    "scope_id" => $sinapsi->id,
                    "user_id" => $user_id,
                    "ability" => 'posts_manage'
                ]);
            }
        }
        
        // BLOCKS
        // Initially, all blocks can be deleted
        $blocks_to_delete = Block::where('scope', 'sinapsi')->where('scope_id', $sinapsi->id)->pluck('id')->flip();
        $blocks = json_decode($request->blocks);

        foreach ($blocks as $block) {
            if ($block->id > 9999999) { // It's a new block, hack
                Block::create([
                    'type' => $block->type,
                    'options' => $block->options,
                    'title' => $block->title,
                    'content' => $block->content,
                    'scope' => 'sinapsi',
                    'scope_id' => $sinapsi->id,
                    'order' => $block->order]
                );
            } else { // Update
                $b = Block::findOrFail($block->id);
                $b->order = $block->order;
                $b->save();
                $blocks_to_delete->pull($block->id);
            }
        }

        // Delete blocks
        foreach ($blocks_to_delete as $block_id=>$value) {
            Block::findOrFail($block_id)->delete();
        }

        event(new SinapsisChanged());

        return redirect()->to($sinapsi->slug);
    }

    /**
     * Delete sinapsi
     *
     * @return Response
     */
    public function destroy($sinapsi_slug)
    {
        //TODO: control if not exists
        //TODO: roles
         $sinapsi = Sinapsi::where('slug', $sinapsi_slug)->first()->delete();

        event(new SinapsisChanged());
        
        return redirect()->to('sinapsis');
    }

    /**
     * Include post into a manual sinapsi
     *
     * @return Response
     */
    public function post_in($post_id, $sinapsi_id)
    {
        DB::table('sinapsi_posts')->insert([
                'post_id' => $post_id,
                'sinapsi_id' => $sinapsi_id,
                'order' => 0
        ]);

        return redirect()->back();
    }

    /**
     * Exclude post from a manual sinapsi
     *
     * @return Response
     */
    public function post_out($post_id, $sinapsi_id)
    {
        DB::table('sinapsi_posts')
            ->where('post_id', $post_id)
            ->where('sinapsi_id', $sinapsi_id)
            ->delete();

        return redirect()->back();
    }
}
