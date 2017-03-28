<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Sinapsi\Repositories\PostRepository;
use Sinapsi\Entity;

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

        $params[$type] = $mId;

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
                $__entity->keyField = 'id';
                $__entity->searchOptions = ['tags','order'];
                break;
            default:
                dd('error en el tipus d\'entitat');

        }

        $__entity->obj = Entity::selectRaw('entities.*,
             e2.name AS parent_name,
             e2.codeid AS parent_codeid, 
             e2.municipi AS parent_location')
            ->rightJoin('entities AS e2', 'entities.parent_id', '=', 'e2.id')
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
        $params[$type] = $mId;
        $posts = $this->postRepository->getPostsCount($params);

        return $posts;
    }

    public function create()
    {
        //TODO
    }

    public function store()
    {
        //TODO
    }

    public function edit()
    {
        //TODO
    }

    public function update()
    {
        //TODO
    }

    public function destroy()
    {
        //TODO
    }
}
