<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Author;


/**
 * Author controller.
 */
class AuthorController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Author::cards();
        
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
        $resource = Author::cards($id)->first();
        
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
        $values = Author::validateFields($request);
        $resource = Author::whereId($id)->forUser()->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        // Filter out all non-updatable values
        
        $values = array_intersect_key($values, [
            'municipality_id' => null,
            'territory_id' => null,
            'school_id' => null
        ]);
        
        if ($resource->type === 'schools') {
            unset($values['school_id']);
        }
        
        // Update the author resource
        
        try {
            $resource->update($values);
        } catch (QueryException $e) {
            Author::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
