<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Territory;


/**
 * Territory controller.
 */
class TerritoryController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Territory::cards();
        
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
        $resource = Territory::cards($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        return $resource;
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = Territory::validateRequired($request);
        $values = Territory::validateFields($request);
        
        try {
            $resource = Territory::create($values);
        } catch (QueryException $e) {
            Territory::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => $resource->id];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = Territory::validateFields($request);
        $resource = Territory::whereID($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        try {
            $resource->update($values);
        } catch (QueryException $e) {
            Territory::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $result = Territory::whereID($id)->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
}
