<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Gate;

use Sinapsi\Repositories\PostRepository;
use Sinapsi\Entity;
use Sinapsi\Channel;
use Sinapsi\Block;

class EntityController extends Controller
{
    public function __construct(PostRepository $PostRepository)
    {
        $this->postRepository = $PostRepository;
    }

    /**
     *
     * index
     * show entity (can be a School, ST, SE or Project)
     *
     * return view
    **/
    public function index(Request $request, $type, $mId)
    {
        $params = $request->all();

        $__entity = $this->getEntity($type, $mId);
        $entity = $__entity->obj;

        $search_options = $__entity->searchOptions;

        // Combine params from BBDD and params from url or ui search fields
        $filters_from_UI = $this->buildUrlFilters($params);

        return view('entity/index', compact([
            'entity',
            'search_options',
            'filters_from_UI'
            ])
        );
    }

    public function getEntity($type, $mId)
    {
        $app = app();
        $__entity = $app->make('stdClass');

        switch ($type) {
            case 'school':
                $__entity->keyField = 'slug';
                $__entity->searchOptions = ['tags','order'];
                break;
            case 'se':
                $__entity->keyField = 'codeid';
                $__entity->searchOptions = ['city','tags','order','school_types','schools'];
                break;
            case 'st':
                $__entity->keyField = 'id';
                $__entity->searchOptions = ['city','tags','order','school_types','schools','se'];
                break;
            case 'project':
                $__entity->keyField = 'slug';
                $__entity->searchOptions = ['tags','order'];
                break;
            default:
                dd('error en el tipus d\'entitat');

        }

        $__entity->obj = Entity::selectRaw('entities.*,
             e2.name AS parent_name,
             e2.codeid AS parent_codeid, 
             e2.municipi AS parent_location')
            ->leftJoin('entities AS e2', 'entities.parent_id', '=', 'e2.id')
            ->where('entities.'.$__entity->keyField, $mId)
            ->first();

        return $__entity;
    }

    /**
     * posts
     * Get posts by entity
     *
     * return mixed
     **/
    public function posts(Request $request, $type, $mId)
    {
        $params = $request->all();
        $__entity = $this->getEntity($type, $mId);
        $type = ($type == 'project') ? 'p' : $type;
        $params[$type] = $mId;
        $posts = $this->postRepository->getPosts($params);

        return $posts;
    }

    /**
     * postsCount
     * Get posts count by entity
     *
     * return mixed
     **/
    public function postsCount(Request $request, $type, $mId)
    {
        $params = $request->all();
        $__entity = $this->getEntity($type, $mId);
        $type = ($type == 'project') ? 'p' : $type;
        $params[$type] = $mId;
        $posts = $this->postRepository->getPostsCount($params);

        return $posts;
    }

    public function create()
    {

        $entities = Entity::all();
        $cities = getCities();
        $counties = getCounties();
        $centerTypes = getCenterTypes();
        $titularities = getTitularity();
        $delegations = getDelegations();
        $entitiesParent = getEntitiesParent();
        $entitiesTypes = getEntitiesTypes();

        return view('entity/create',
                compact([
                    'entities',
                    'cities',
                    'counties',
                    'centerTypes',
                    'titularities',
                    'delegations',
                    'entitiesParent',
                    'entitiesTypes'
                ]));
    }

    public function store(Request $request)
    {
        // TODO: rols
        $params = $request->all();

        $entity = Entity::firstOrCreate([
            'codeid' => $request->codeid,
            'name' => $request->name,
            'slug' => $request->slug,
            'naturalesa' => $request->naturalesa,
            'titularitat' => $request->titularitat,
            'address' => $request->address,
            'cp' => $request->cp,
            'phone' => $request->phone,
            'fax' => $request->fax,
            'delegacio' => $request->delegacio,
            'comarca' => $request->comarca,
            'municipi' => $request->city,
            'geo_x' => $request->geo_x,
            'geo_y' => $request->geo_y,
            'nivells' => $request->nivells,
            'email' => $request->email,
            'web' => $request->web_address,
            'type' => $request->entity_type,
            'agora_services' => $request->agora_services,
            'agora_managers' => $request->agora_managers,
            'twitter' => $request->twitter,
            'facebook' => $request->facebook,
            'instagram' => $request->instagram,
            'parent_id' => $request->parentid,
            'active' => $request->activation,
            'info' => $request->info,
        ]);

        if ($request->file('sns_logo')) {
            $entity->image = url('/').'/'.$entity->saveLogo($request->file('sns_logo'));
        }
        
        $entity->save();

        if( $entity->type == 'Projecte' ){
            $entityType = 'Project';
        } else {
            $entityType = 'Entity';
        }

        // CHANNELS
        if(!empty($request->rss_channels)){
            $rssChannels = explode(PHP_EOL, $request->rss_channels);
            foreach ($rssChannels as $rssChannel) {
                $trim_fet = trim($rssChannel);
                Channel::create([
                    'type' => $entityType,
                    'obj_id' => $entity->id,
                    'rss' => $trim_fet,
                    'active' => $entity->active,
                ]);
            }
        }
        
        // BLOCKS
        $blocks = json_decode($request->blocks);

        if (!empty($blocks)) {
            foreach ($blocks as $block) {
                Block::create([
                        'type' => $block->type,
                        'options' => $block->options,
                        'title' => $block->title,
                        'content' => $block->content,
                        'scope' => "entity",
                        'scope_id' => $entity->id,
                        'order' => $block->order]
                );
            }
        }

        if( $entity->type == 'Projecte' ){
            return redirect()->to('projectes');
        }else{
            return redirect()->to('centres');
        }
    }

    public function edit($entity_codename)
    {

        $entity = getEntity($entity_codename);

        if (count($entity)) {
            $entity = $entity[0];
        }

        if (Gate::denies('manage', $entity->id)) {
            return view('errors/error',
                ["err_message" => "No teniu permissos per editar aquesta sinapsi"]);
        }

        $blocks = Block::where('scope', 'entity')
            ->where('scope_id', $entity->id)
            ->orderBy('order', 'asc')
            ->get();

        $entities = Entity::all();
        $cities = getCities();
        $counties = getCounties();
        $centerTypes = getCenterTypes();
        $titularities = getTitularity();
        $delegations = getDelegations();
        $entitiesParent = getEntitiesParent();
        $entitiesTypes = getEntitiesTypes();
        $channels = getChannelsEntities($entity_codename);

        return view('entity/edit',
                compact([
                    'entity',
                    'entities',
                    'cities',
                    'counties',
                    'centerTypes',
                    'titularities',
                    'delegations',
                    'entitiesParent',
                    'entitiesTypes',
                    'channels',
                ]));
    }

    /**
     * Update entity in database
     *
     * @return Response
     */
    public function update(Request $request)
    {

        $entity = Entity::where('id', $request->id)->first();

        if (Gate::denies('manage', $entity->id)) {
            return view('errors/error',
                ["err_message" => "No teniu permissos per editar aquesta sinapsi"]);
        }

        $entity->codeid = $request->codeid;
        $entity->name = $request->name;
        $entity->slug = $request->slug;
        $entity->naturalesa = $request->naturalesa;
        $entity->titularitat = $request->titularitat;
        $entity->address = $request->address;
        $entity->cp = $request->cp;
        $entity->phone = $request->phone;
        $entity->fax = $request->fax;
        $entity->delegacio = $request->delegacio;
        $entity->comarca = $request->comarca;
        $entity->municipi = $request->city;
        $entity->geo_x = $request->geo_x;
        $entity->geo_y = $request->geo_y;
        $entity->nivells = $request->nivells;
        $entity->email = $request->email;
        $entity->web = $request->web_address;
        $entity->type = $request->entity_type;
        $entity->agora_services = $request->agora_services;
        $entity->agora_managers = $request->agora_managers;
        $entity->twitter = $request->twitter;
        $entity->facebook = $request->facebook;
        $entity->instagram = $request->instagram;
        $entity->parent_id = $request->parentid;
        $entity->active = $request->activation;
        $entity->info = $request->info;

        if ($request->file('sns_logo')) {
            $entity->image = url('/').'/'.$entity->saveLogo($request->file('sns_logo'));
        }else{
            $entity->image = "";
        }

        $entity->save();

        // CHANNELS
        if( $entity->type == 'Projecte' ){
            $entityType = 'Project';
        } else {
            $entityType = 'Entity';
        }

        $channels = Channel::where('obj_id', $entity->id)->update(['active' => 0]);

        if(!empty(trim($request->rss_channels))){

            $rssChannels = explode(PHP_EOL, $request->rss_channels);
            $countChannels = count( $rssChannels );
            foreach ($rssChannels as $rssChannel) {
                $trim_fet = trim($rssChannel);
                $channels = Channel::where('rss',$trim_fet)->first();

                if( $countChannels == 1 ){
                    $channelActive = Channel::where('id', $channels->id)->update(['active' => $entity->active,'rss' => $trim_fet]);
                } else {
                    if($channels){
                        $channelActive = Channel::where('id', $channels->id)->update(['active' => $entity->active]);
                    } else {
                        if( ! empty($trim_fet) ){
                            Channel::create([
                                'type' => $entityType,
                                'obj_id' => $entity->id,
                                'rss' => $trim_fet,
                                'active' => $entity->active,
                            ]);
                        }
                    }
                }
            }
        }

        // BLOCKS
        // Initially, all blocks can be deleted
        $blocks_to_delete = Block::where('scope', 'entity')->where('scope_id', $entity->id)->pluck('id')->flip();
        $blocks = json_decode($request->blocks);

        foreach ($blocks as $block) {
            if ($block->id > 9999999) { // It's a new block, hack
                Block::create([
                    'type' => $block->type,
                    'options' => $block->options,
                    'title' => $block->title,
                    'content' => $block->content,
                    'scope' => 'entity',
                    'scope_id' => $entity->id,
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

        if( $entity->type == 'Projecte' ){
            return redirect()->to('projectes');
        }else{
            return redirect()->to('centres');
        }
    }

    /**
     * Delete sinapsi
     *
     * @return Response
     */
    public function destroy($entity_id)
    {
        //TODO: control if not exists
        //TODO: roles
        $entity = Entity::where('id', $entity_id)->update(['active' => 0]);
        $channels = Channel::where('obj_id', $entity_id)->update(['active' => 0]);
        $entityGet = Entity::where('id', $entity_id)->get();

        if( $entityGet[0]->type == 'Projecte' ){
            return redirect()->to('projectes');
        }else{
            return redirect()->to('centres');
        }
    }
}
