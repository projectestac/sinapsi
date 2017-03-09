<?php

namespace Sinapsi\Http\Controllers;

use File;
use DB;
use Cache;
use Illuminate\Http\Request;
use DebugBar;
use Auth;

use Sinapsi\Tag;
use Sinapsi\Block;
use Sinapsi\Options;
use Sinapsi\Sinapsi;
use Sinapsi\TagAlias;
use Sinapsi\User;
use Sinapsi\Repositories\PostRepository;
use Sinapsi\Repositories\EntityRepository;

class AppController extends Controller
{
    public function __construct(PostRepository $PostRepository, EntityRepository $EntityRepository)
    {
        $this->postRepository = $PostRepository;
        $this->entityRepository = $EntityRepository;
    }

    /**
     * Call homepage view with params (from url and/or ui)
     *
     * @return view
     */
    public function index(Request $request)
    {
        $params = $request->all();

        $search_options = ['city','tags','se','st','order','school_types','schools','date'];

        // Combine params from BBDD and params from url or ui search fields
        $filters_from_UI = $this->buildUrlFilters($params);

        $blocks = Cache::remember('blocks', 5, function () {
            return Block::where('scope', 'home')
                ->orderBy('order', 'asc')
                ->get();
        });
        
        $logo = Cache::remember('logo', 5, function () {
            return Options::where('scope', 'global')
                ->where('option', 'logo')
                ->first();
        });
        $home['logo'] = $logo ? $logo->value : '';

        $description =  Cache::remember('description', 5, function () {
            return Options::where('scope', 'global')
                ->where('option', 'description')
                ->first();
        });
        $home['description'] = $description ? $description->value : 'Sense descripció';

        return view('home', compact([
            'search_options',
            'filters_from_UI',
            'blocks',
            'home'
        ]));
    }

    /**
     * Call embed homepage view
     *
     * @return view
     */
    public function embed(Request $request)
    {
        $params = $request->all();

        $search_options = ['city','tags','se','st','order','school_types','schools'];
        
        $filters_from_UI = $this->buildUrlFilters($params);
        $filters_from_DB = "";

        $height = (!empty($params['h'])) ? $params['h'] : '500';
        $pv = (!empty($params['pv'])) ? $params['pv'] : 'sns-medium-card';
        $search_box = (!empty($params['search'])) ? $params['search'] : '';

        $pagetype = 'home';
        $info = "";

        return view('embed', compact([
            'search_box',
            'search_options',
            'filters_from_UI',
            'filters_from_DB',
            'height',
            'pv',
            'pagetype',
            'info'
        ]));
    }

    /**
     * Get posts
     *
     * @return collection
     */
    public function posts(Request $request)
    {
        $params = $request->all();

        /*
        // If user load home page without params, get cache posts
        if ( count($params)==0 ) {
            if ( Cache::has('posts') ) {
                $posts = Cache::get('posts');
            } else {
                $posts = $this->postRepository->getPosts($params);
                Cache::add('posts',$posts,5);
            }
        } else {
            $posts = $this->postRepository->getPosts($params);
        }
        */

        $posts = $this->postRepository->getPosts($params);

        return $posts;
    }
    
    /**
     * Get posts count
     *
     * @return array
     */
    public function postsCount(Request $request)
    {
        $params = $request->all();
        $info = $this->postRepository->getPostsCount($params);
        return $info;
    }

    /**
     * showSinapsis
     * Generate view sinapsis with treeview ordered by name and tag list ordered by post count
     *
     * @return view
     */
    public function showSinapsis()
    {
        $sinapsis = Sinapsi::all();
        $sns_tree = $this->getSinapsisTree();
        $tags = $this->getTags();
        $sns_tags_info = [];
        $sns_tags_info['description'] = Options::where('scope', 'sns-tags')
                                        ->where('option', 'description')
                                        ->pluck('value')->first();
        $blocks = Block::where('scope', 'sns-tags')
                        ->orderBy('order', 'asc')
                        ->get();

        return view('sinapsis', compact([
            'sinapsis',
            'tags',
            'sns_tree',
            'sns_tags_info',
            'blocks'
        ]));
    }

    //TODO: repository maybe
    public function getTags()
    {
        $exclude = ['Portada', 'General', 'Inici', 'escola', 'institut'];
        $tags = Tag::selectRaw('tags.name, tags.slug, tags.description, count(post_tags.id) as count_posts')
            ->leftJoin('post_tags', 'post_tags.tag_id', '=', 'tags.id')
            ->whereNotIn('tags.slug', $exclude)
            ->groupBy('tags.id')
            ->orderBy('count_posts', 'DESC')->get();
        return $tags;
    }

    // Schools, SE, ST, CREDA, CLIL, etc.
    public function showEduEntities()
    {
        $entities = $this->entityRepository->getEduEntities();
        return view('entities', compact('entities'));
    }

    public function showProjects()
    {
        $projects = $this->entityRepository->getProjects();
        return view('projects', compact('projects'));
    }

    public function showUsers()
    {
        $users = $this->entityRepository->getUsers();
        return view('users', compact('users'));
    }

    /**
     * editAppSettings
     * Edit general application settings (logo, description, users roles, homepage blocks)
     *
     * @return view
     */
    public function editAppSettings(Request $request)
    {
        $home = [];
        
        $logo = Options::where('scope', 'global')->where('option', 'logo')->first();
        $home['logo'] = !empty($logo) ? $logo->value : '';

        $description = Options::where('scope', 'global')->where('option', 'description')->first();
        $home['description'] = !empty($description) ? $description->value : 'Sense descripció';

        $admin_users = User::where('role', 'admin')->pluck('id');

        $selected["admins"] = !empty($admin_users) ? implode(",", $admin_users->toArray()) :'';

        $selected["blacklist"] = '';
        $selected["whitelist"] = '';
        $selected["domains"]   = '';

        $blocks = Block::where('scope', '=', 'home')
                        ->orderBy('order', 'asc')
                        ->get();

        return view('admin/settings', compact([
            'home',
            'selected',
            'blocks'])
        );
    }

    public function updateAppSettings(Request $request)
    {
        // Main logo
        if (!empty($request->file('logo'))) {
            $file = $request->file('logo');
            $folder = 'storage/public';
            $filename =  'home_logo'.".".$file->getClientOriginalExtension();
            $file->move($folder, $filename);
            $option = Options::where('scope', 'global')->where('option', 'logo')->first();

            if ($option) {
                $option->value = url('/').'/'.$folder ."/". $filename;
                $option->save();
            } else {
                Options::create([
                    'scope' => 'global',
                    'option'=>'logo',
                    'value'=> url('/').'/'.$folder ."/". $filename
                ]);
            }
            Cache::pull('logo');
        }

        // Description
        if (!empty($request->description)) {
            $option = Options::where('scope', 'global')->where('option', 'description')->first();

            if ($option) {
                $option->value = $request->description;
                $option->save();
            } else {
                Options::create([
                    'scope' => 'global',
                    'option'=>'description',
                    'value'=> $request->description
                ]);
            }
            Cache::pull('description');
        }

        // Users
        if (!empty($request->users)) {
            foreach ($request->users as $req_user) {
                $user = User::findOrFail($req_user);
                if ($user->role!='admin') {
                    $user->role = 'admin';
                    $user->save();
                }
            }
        }

        // Blocks
        // Initially, all blocks can be deleted
        $blocks_to_delete = Block::where('scope', 'home')->pluck('id')->flip();
        $blocks = json_decode($request->blocks);

        foreach ($blocks as $block) {
            if ($block->id > 99999999) { // It's a new block (id is timestamp)
                Block::create([
                        'type' => $block->type,
                        'options' => $block->options,
                        'title' => $block->title,
                        'content' => $block->content,
                        'scope' => "home",
                        'scope_id' => 0,
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

        Cache::pull('blocks');

        return redirect()->to('/');
    }

    /**
     * getSinapsisBySearchTerm
     * Returns the 'sinapsis' whose title or description matches the search term
     *
     * @return mixed
     */
    public function getSinapsisBySearchTerm(Request $request)
    {
        $query = 'SELECT * FROM sinapsis 
                  WHERE 
                  MATCH (name, description ) 
                  AGAINST("'. $request->q .'" IN BOOLEAN MODE)';

        $sinapsis = DB::select($query);
            
        return $sinapsis;
    }

    /**
     * Generate the tree of sinapsis and save into database
     *
     * @return string
     */
    public function getSinapsisTree()
    {
        $sinapsi_tree = Options::where('option', 'sinapsi-tree')->first();

        if (!empty($sinapsi_tree)) {
            return $sinapsi_tree->value;
        }
        return '[]';
    }

    /**
     * Generate the tree of sinapsis and save into database
     *
     * @return
     */
    public function updateSinapsisTree()
    {
        $sinapsi_tree = Options::firstOrCreate(
            [ 'option' => 'sinapsi-tree' ]
        );

        $sinapsi_tree->scope = "global";
        $sinapsi_tree->value = json_encode($this->__getSinapsisTree());
        $sinapsi_tree->save();

        return back();
    }

    /**
     * Generate the tree of sinapsis
     *
     * @return string
     */
    private function __getSinapsisTree()
    {
        $roots = Sinapsi::whereRaw('parent_id is NULL')->orderBy('name', 'ASC')->get();

        $sns_tree = [];

        foreach ($roots as $root) {
            $a['text'] = $root->name;
            $a['href'] = url('/')."/".$root->slug;
            $a['tags'] = [ $root->slug ];

            if (count($root->childs)) {
                $a['nodes'] = $this->child($root);
            }
            $sns_tree[] = $a;
            $a=[];
        }

        return $sns_tree;
    }

    public function child($sinapsi)
    {
        foreach ($sinapsi->childs as $child) {
            $a['text'] = $child->name;
            $a['href'] = url('/')."/".$child->slug;
            $a['tags'] = [ $child->slug ];
            if (count($child->childs)) {
                $a['nodes'] = $this->child($child);
            }
            $sns_tree[]=$a;
            $a=[];
        }
        return $sns_tree;
    }

    /**
     * TODO: description
     *
     * @return
     */
    public function editSinapsisTagsSettings()
    {
        $sns_tags_description = Options::firstOrCreate(
            [ 'scope' =>  'sns-tags',
              'option' => 'description'
            ]
        );
        $description = $sns_tags_description['value'];

        $blocks = Block::where('scope', 'sns-tags')
            ->orderBy('order', 'asc')
            ->get();

        $aliases = TagAlias::all();

        return view('admin/sinapsis_settings', compact(
            'description',
            'aliases',
            'blocks'
        ));
    }

    /**
     * TODO: description
     *
     * @return
     */
    public function updateSinapsisTagsSettings(Request $request)
    {
        $sns_tags_description = Options::firstOrCreate(
            [ 'scope' =>  'sns-tags',
               'option' => 'description'
            ]
        );

        $sns_tags_description->value = $request->description;
        $sns_tags_description->save();

        // Blocks
        // Initially, all blocks can be deleted
        $blocks_to_delete = Block::where('scope', 'sns-tags')->pluck('id')->flip();
        $blocks = json_decode($request->blocks);

        foreach ($blocks as $block) {
            if (empty($block->id)) { // It's a new block
                Block::create([
                        'type' => $block->type,
                        'options' => $block->options,
                        'title' => $block->title,
                        'content' => $block->content,
                        'scope' => "sns-tags",
                        'scope_id' => 0,
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

        return redirect(url('sinapsis'));
    }
}
