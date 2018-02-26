<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Project;


/**
 * Project controller.
 */
class ProjectController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Project::cards();
        
        $query->filter($request);
        $query->include($request);
        $query->sort($request);
        
        return $query->paginateRequest($request);
    }
    
    
    /**
     * Display the specified resource.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function show($id) {
        $resource = Project::cards($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        return $resource;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = Project::validateFields($request);
        $resource = Project::whereId($id)->forAuthor()->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        try {
            $resource->update($values);
        } catch (QueryException $e) {
            Project::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = Project::validateRequired($request);
        $values = Project::validateFields($request);
        
        try {
            $resource = Project::create($values);
        } catch (QueryException $e) {
            Project::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => $resource->id];
    }

}
